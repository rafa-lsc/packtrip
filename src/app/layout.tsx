import type { Metadata } from "next";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import { inter } from "@/lib/fonts";
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
        <LayoutClientWrapper>
                {children}
                </LayoutClientWrapper>
      </body>
    </html>
  );
}
