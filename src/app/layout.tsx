import type { Metadata } from "next";
import { Inter , Girassol, Poppins, Montserrat} from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets:["latin"]
})

export const girassol = Girassol({
  subsets: ['latin'],
  variable: "--font-girassol",
  weight: ['400'],
})

export const poppins = Poppins({
  subsets: ['latin'],
  variable: "--font-poppins",
  weight: ['400'],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-open-sans",
})

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
        <Header/>
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
