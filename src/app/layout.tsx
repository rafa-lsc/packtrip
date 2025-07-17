import type { Metadata } from "next";
import { Inter , Girassol, Poppins} from "next/font/google";
import Header from "@/components/Header";
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
        className={`${inter.variable}  antialiased`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
