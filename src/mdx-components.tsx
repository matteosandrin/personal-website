import type { MDXComponents } from "mdx/types";

// Required by @next/mdx. No custom components yet.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return components;
}
