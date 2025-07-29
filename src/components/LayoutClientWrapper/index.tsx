"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
      <Footer />
    </>
  );
}
