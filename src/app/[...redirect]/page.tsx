import { REDIRECTS } from "@/lib/redirects";

// Builds one page for each entry in REDIRECTS. Real routes take precedence
// over this catch-all, and paths not in REDIRECTS give a 404.
type Props = { params: Promise<{ redirect: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(REDIRECTS).map((from) => ({
    redirect: from.split("/").filter(Boolean),
  }));
}

async function target({ params }: Props) {
  const { redirect } = await params;
  return REDIRECTS[`/${redirect.join("/")}`];
}

export async function generateMetadata(props: Props) {
  const [path] = (await target(props)).split("#");
  return { alternates: { canonical: path } };
}

// The site is static, so it cannot send an HTTP redirect. A zero-delay meta
// refresh works without JavaScript, and search engines treat it as permanent.
export default async function Redirect(props: Props) {
  // Put the trailing slash before the "#" part of the URL.
  const [path, hash] = (await target(props)).split("#");
  const url = hash ? `${path}/#${hash}` : `${path}/`;
  return <meta httpEquiv="refresh" content={`0;url=${url}`} />;
}
