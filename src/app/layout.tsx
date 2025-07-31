import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { inter } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "PackTrip",
  description: "Site de viagens para o projeto final",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable}  antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
        <Toaster richColors position="bottom-right" />
      </body>
    </html>
  );
}
