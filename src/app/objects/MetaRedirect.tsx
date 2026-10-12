// The site is static, so it cannot send an HTTP redirect. A zero-delay meta
// refresh works without JavaScript, and search engines treat it as permanent.
export function MetaRedirect({ to }: { to: string }) {
  return <meta httpEquiv="refresh" content={`0;url=${to}`} />;
}
