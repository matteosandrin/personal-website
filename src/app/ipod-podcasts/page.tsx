import { BulletList } from "@/components/BulletList";
import { Img } from "@/components/Img";
import { ProjectLayout } from "@/components/ProjectLayout";
import { TextLink } from "@/components/TextLink";
import { Tooltip } from "@/components/Tooltip";
import { pageMetadata, siteDescription } from "@/lib/metadata";

const TITLE = "How to Sync Podcasts to an iPod";
const IMAGE = "/assets/img/ipod-podcasts/ipod-podcasts-01.jpg";

export const metadata = pageMetadata({
  title: TITLE,
  path: "/ipod-podcasts",
  description: siteDescription(`This page showcases the ${TITLE}`),
  image: IMAGE,
});

const PODCASTS_DIR =
  "~/Library/Group Containers/243LU875E5.groups.com.apple.podcasts";

export default function Page() {
  return (
    <ProjectLayout title={TITLE}>
      <div className="max-w-2xl">
        <Img
          src={IMAGE}
          alt="An iPod Classic showing the Podcasts menu"
          className="my-double w-full shadow-xl"
        />
        <p>
          When I first started restoring my iPod Classic, I was surprised to
          learn that it can still sync natively with a modern Mac. Apple
          deserves credit for preserving compatibility with iPods so long after
          they were discontinued. Supporting old devices takes deliberate
          effort, and I truly appreciate it.
        </p>
        <p>
          A bit of history: iPods originally synced through iTunes. With the
          release of macOS Catalina in 2019, iTunes was discontinued, and iPod
          syncing moved to Finder. Media management was split across the Music,
          Podcasts, and TV apps.
        </p>
        <p>
          This division of labour mostly works well, except for one sore spot:
          podcasts.
        </p>
        <h2>Bad Metadata</h2>
        <p>
          When I first synced podcasts from my Mac to the iPod, I noticed some
          peculiarities:
        </p>
        <BulletList>
          <li>
            Episode titles looked like production filenames, such as{" "}
            <code>99_pi_audiomix_2008</code>
          </li>
          <li>
            Show names were often in all caps, such as{" "}
            <code>99% INVISIBLE</code>
          </li>
          <li>Artwork was often missing</li>
          <li>
            Some episodes appeared under a playlist named <code>Root</code>
          </li>
        </BulletList>
        <p className="relative">
          All these issues trace back to one problem. When the Podcasts app on
          macOS downloads an episode, it stores clean metadata in a local{" "}
          <Tooltip wide tip={`${PODCASTS_DIR}/Documents/MTLibrary.sqlite`}>
            SQLite database
          </Tooltip>
          . It downloads the audio as an MP3 file to a{" "}
          <Tooltip wide tip={`${PODCASTS_DIR}/Library/Cache/`}>
            cache folder
          </Tooltip>
          . But that file has only the producer’s original tags, which are often
          incomplete or wrong.
        </p>
        <p>
          When syncing podcasts, Finder reads the tags in the MP3 files rather
          than the clean metadata in the SQLite database. So titles, artwork,
          and show names can look right in the Podcasts app but wrong on the
          iPod.
        </p>
        <p>
          The solution is to open the MP3 folder above and use an app like{" "}
          <TextLink href="https://kid3.kde.org/" newTab>
            Kid3
          </TextLink>{" "}
          to edit each file’s tags. After that, the podcasts sync to the iPod
          with the correct metadata.
        </p>
        <p>
          However, editing each file by hand quickly got tedious. And besides,
          the correct metadata was already sitting in the SQLite database. So I
          wrote a{" "}
          <TextLink
            href="https://github.com/matteosandrin/fix-podcast-tags"
            newTab>
            small script
          </TextLink>{" "}
          to copy it into the MP3 tags:
        </p>
        <pre>
          <code>{`git clone https://github.com/matteosandrin/fix-podcast-tags
cd fix-podcast-tags
pip install mutagen

python3 fix_podcast_tags.py`}</code>
        </pre>
        <p>
          Note: sometimes Finder will still sync the wrong episode titles
          because it has a stale local cache. To clear it, open Activity Monitor
          and force quit these processes:
        </p>
        <BulletList>
          <li>
            <code>AMPLibraryAgent</code>
          </li>
          <li>
            <code>AMPDevicesAgent</code>
          </li>
          <li>
            <code>AMPDeviceDiscoveryAgent</code>
          </li>
        </BulletList>
        <p>
          After that, Finder will reload the episode titles from the MP3 tags.
        </p>
        <h2>Podcasts are not music</h2>
        <p>
          The podcasts now appeared in the iPod’s Podcasts menu with the correct
          metadata and artwork. But they also appeared in the Music menu as
          albums.
        </p>
        <p>
          The problem is in the way Finder syncs podcast tracks. Every track
          synced to the iPod has a <code>media_type</code> field that tells the
          iPod what kind of file it is: <code>0x01</code> for music,{" "}
          <code>0x02</code> for videos, <code>0x04</code> for podcasts, etc.
        </p>
        <p>
          For reasons unknown, Finder sets <code>media_type</code> to{" "}
          <code>0x05</code> for podcasts, combining the music flag (
          <code>0x01</code>) and the podcast flag (<code>0x04</code>) with a
          bitwise OR. The iPod interprets these tracks as{" "}
          <em>both podcasts and music</em>, so they appear in both menus.
        </p>
        <pre>
          <code>{`0x01  ->  0001
0x04  ->  0100
      OR  ----
0x05      0101`}</code>
        </pre>
        <p>
          The solution is to open the iPod’s database at{" "}
          <code>/Volumes/iPod/iPod_Control/iTunes/iTunesDB</code> and change
          those <code>media_type</code> flags from <code>0x05</code> to{" "}
          <code>0x04</code>. Unfortunately, changing the flags is only part of
          the fix: the database also needs to be signed using the iPod’s
          FireWire ID.
        </p>
        <p>
          I wrote a{" "}
          <TextLink
            href="https://github.com/matteosandrin/ipod-db-editor"
            newTab>
            small, general-purpose tool
          </TextLink>{" "}
          for bulk editing the iPod’s database. You can use it to fix the
          podcast tracks’ <code>media_type</code>:
        </p>
        <pre>
          <code>{`git clone https://github.com/matteosandrin/ipod-db-editor
cd ipod-db-editor
pip install -e .

ipod-db-editor set "media_type=4" \\
 --filter "media_type=5" --in-place`}</code>
        </pre>
        <p>
          After running this command, your podcasts will appear in the iPod’s
          Podcasts menu, and <em>only</em> there. You’ll need to rerun it after
          every sync because Finder overwrites these database changes.
        </p>
      </div>
    </ProjectLayout>
  );
}
