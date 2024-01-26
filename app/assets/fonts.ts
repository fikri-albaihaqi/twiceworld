import { Bungee } from "next/font/google";
import { Josefin_Sans } from "next/font/google";
import { DM_Serif_Display } from "next/font/google";
import { Permanent_Marker } from "next/font/google";

export const bungee = Bungee({ 
  subsets: ['latin'], 
  weight:['400'],
  variable: '--font-bungee'
});

export const josefin = Josefin_Sans({ 
  subsets: ['latin'],
  variable: '--font-josefin'
});

export const dmSerif = DM_Serif_Display({ 
  subsets: ['latin'], 
  weight:['400'],
  variable: "--font-dm-serif"
});

export const permanentMarker = Permanent_Marker({ 
  subsets: ['latin'], 
  weight:['400'],
  variable: '--font-permanent-marker' 
});