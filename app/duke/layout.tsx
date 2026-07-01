import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duke",
  description: "Sanjaay Babu at Duke University — Econ, Politics & Philosophy.",
  alternates: { canonical: "/duke" },
};

export default function DukeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
