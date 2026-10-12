import type { MDXComponents } from "mdx/types";
import { TextLink } from "@/components/TextLink";

// Required by @next/mdx. External links open in a new tab.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href = "", children }) => (
      <TextLink href={href} newTab={/^https?:/.test(href)}>
        {children}
      </TextLink>
    ),
    ...components,
  };
}
