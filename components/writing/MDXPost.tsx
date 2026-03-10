// components/writing/MDXPost.tsx
"use client";

import React from "react";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { slugify } from "@/lib/headings";

/**
 * Client-side MDX renderer.
 * The server will serialize MDX and pass `source` to this component.
 * We provide a small set of component mappings (Callout, Aside, Tip).
 */

type Props = {
  source: MDXRemoteSerializeResult;
};

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="callout rounded-md border border-border/40 bg-card/50 p-4 my-6">
      <div className="font-medium mb-1">Note</div>
      <div className="text-sm">{children}</div>
    </div>
  );
}

function Aside({ children }: { children: React.ReactNode }) {
  return (
    <aside className="mdx-aside rounded-md border-l-4 border-border/40 bg-card/30 p-4 my-6">
      <div className="text-sm">{children}</div>
    </aside>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <span className="mdx-tip inline-flex items-center gap-2 rounded px-2 py-0.5 bg-accent/10 text-sm">
      <strong className="mr-1">Tip</strong>
      <span>{children}</span>
    </span>
  );
}

/* Small helper for images inside MDX (keeps styling consistent) */
function MDXImage(props: any) {
  return <img {...props} className="rounded-md mx-auto my-6 max-w-full" />;
}

function getTextContent(children: React.ReactNode): string {
  if (typeof children === "string") return children;
  if (typeof children === "number") return String(children);
  if (Array.isArray(children)) return children.map(getTextContent).join("");
  if (React.isValidElement(children)) {
    return getTextContent((children.props as any).children);
  }
  return "";
}

function makeHeading(Tag: "h1" | "h2" | "h3" | "h4") {
  return function Heading({
    children,
    ...props
  }: {
    children: React.ReactNode;
  }) {
    const id = slugify(getTextContent(children));
    return (
      <Tag id={id} {...props}>
        {children}
      </Tag>
    );
  };
}

export default function MDXPost({ source }: Props) {
  const components = {
    Callout,
    Aside,
    Tip,
    img: MDXImage,
    h1: makeHeading("h1"),
    h2: makeHeading("h2"),
    h3: makeHeading("h3"),
    h4: makeHeading("h4"),
  };

  return <MDXRemote {...(source as any)} components={components} />;
}