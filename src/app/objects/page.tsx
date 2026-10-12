import { MetaRedirect } from "./MetaRedirect";

// The projects pages used to live under /objects.
export const metadata = { alternates: { canonical: "/projects" } };

export default function Objects() {
  return <MetaRedirect to="/projects/" />;
}
