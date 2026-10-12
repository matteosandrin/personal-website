import { SITE_URL } from "@/lib/site";

// Sends the visitor to another page. The site is static, so a script does it.
export function Redirect({ to }: { to: string }) {
  return (
    <>
      <link rel="canonical" href={`${SITE_URL}${to}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(to)} + window.location.search + window.location.hash);`,
        }}
      />
    </>
  );
}
