import type { Metadata } from "next";
import "./globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";
import { inter } from "@/lib/fonts";
import { Toaster } from "@/components/ui/sonner"

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
                <Toaster richColors position="bottom-right"   />
      </body>
    </html>
  );
}
