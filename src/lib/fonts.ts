import { Inter , Girassol, Poppins, Montserrat } from "next/font/google";

export const inter = Inter({
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
