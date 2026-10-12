import { Gallery } from "@/components/Gallery";
import { PageHeader } from "@/components/PageHeader";
import { pageMetadata, siteDescription } from "@/lib/metadata";

const filmImages = [
  "/assets/img/film/roll_010_img_08_jan_2020.jpg",
  "/assets/img/film/roll_009_img_11_dec_2019.jpg",
  "/assets/img/film/roll_007_img_15_nov_2019.jpg",
  "/assets/img/film/roll_008_img_10_dec_2019.jpg",
  "/assets/img/film/roll_006_img_04_sep_2019.jpg",
  "/assets/img/film/roll_009_img_08_dec_2019.jpg",
];

export const metadata = pageMetadata({
  title: "Photo",
  path: "/photo",
  description: siteDescription("This page showcases Matteo's photography."),
  image: filmImages[2],
});

export default function Photo() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-2xl">
        <PageHeader title="Photography" />
        <p>
          Since I was a kid I've enjoyed taking pictures, and since 2018 I've
          been taking them on film. All the photos below were shot on Kodak
          Ultramax 400 or Kodak Portra 400 film, and with either a Nikon FE or a
          Pentax PC35AF camera.
        </p>
        <p>
          This is a small selection of pictures I think turned out well. Enjoy!
        </p>
      </div>
      <Gallery images={filmImages} />
    </div>
  );
}
