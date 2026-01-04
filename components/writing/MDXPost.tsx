// components/writing/MDXPost.tsx
"use client";

import React from "react";
import { MDXRemote } from "next-mdx-remote";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

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

export default function MDXPost({ source }: Props) {
  const components = {
    Callout,
    Aside,
    Tip,
    img: MDXImage,
    // you can add overrides for a, p, h2, etc. if desired
  };

  return <MDXRemote {...(source as any)} components={components} />;
}