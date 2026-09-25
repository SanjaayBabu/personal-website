// app/writing/page.tsx
import { Suspense } from "react";
import { Metadata } from "next";
import WritingSection from "@/components/writing/WritingSection";

export const metadata: Metadata = {
  title: "Writing — Sanjaay Babu",
  description: "Essays, notes, and reflections.",
};

export default function WritingIndexPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 sm:px-8 py-16 sm:py-24">
      <Suspense fallback={null}>
        <WritingSection />
      </Suspense>
    </main>
  );
}
