// Old URLs that now live somewhere else. Each key gets a static page that
// sends the visitor to its value.
export const REDIRECTS: Record<string, string> = {
  // The projects pages used to live under /objects.
  "/objects": "/projects",
  "/objects/123-sign": "/projects/123-sign",
  "/objects/dd-sign": "/projects/dd-sign",
  "/objects/led-matrix": "/projects/led-matrix",
  "/objects/metro-clock": "/projects/metro-clock",
  "/objects/metrocard": "/projects/metrocard",
  "/objects/space-clock": "/projects/space-clock",
};

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
  return { alternates: { canonical: await target(props) } };
}

// The site is static, so it cannot send an HTTP redirect. A zero-delay meta
// refresh works without JavaScript, and search engines treat it as permanent.
export default async function Redirect(props: Props) {
  return <meta httpEquiv="refresh" content={`0;url=${await target(props)}/`} />;
}
