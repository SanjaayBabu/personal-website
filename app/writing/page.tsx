// app/writing/page.tsx
import React from "react";
import { Lora } from "next/font/google";
import { getAllPostsMeta } from "@/lib/writing";
import WritingPreview from "@/components/writing/WritingPreview";
import MailingListSignup from "@/components/writing/MailingListSignup";

const lora = Lora({ subsets: ["latin"], weight: ["400", "600"] });

export default async function WritingIndexPage() {
  const posts = await getAllPostsMeta();

  return (
    <main className="max-w-3xl mx-auto py-12">
      <h1 className={`${lora.className} text-3xl font-bold mb-8`}>Writing</h1>
      <div className="space-y-8">
        {posts.map((p) => (
          <WritingPreview key={p.slug} post={p} />
        ))}
      </div>
      <div className="mt-16">
        <MailingListSignup />
      </div>
    </main>
  );
}