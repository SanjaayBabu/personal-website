"use client";

import dynamic from "next/dynamic";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

const MDXPost = dynamic(() => import("./MDXPost"), { ssr: false });

export default function MDXPostWrapper({ source }: { source: MDXRemoteSerializeResult }) {
  return <MDXPost source={source} />;
}
