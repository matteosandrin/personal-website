import { Redirect } from "../Redirect";

// The projects pages used to live under /objects.
const OLD_SLUGS = [
  "123-sign",
  "dd-sign",
  "led-matrix",
  "metro-clock",
  "metrocard",
  "space-clock",
];

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return OLD_SLUGS.map((slug) => ({ slug }));
}

export default async function ObjectRedirect({ params }: Props) {
  const { slug } = await params;
  return <Redirect to={`/projects/${slug}/`} />;
}
