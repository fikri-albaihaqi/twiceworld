import { Bungee, Gloria_Hallelujah, Poppins, Cutive_Mono } from "next/font/google";

export const bungee = Bungee({ 
  subsets: ['latin'], 
  weight:['400'],
});

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700']
});

export const gloriaHallelujah = Gloria_Hallelujah({ 
  subsets: ['latin'], 
  weight:['400'],
});

export const cutiveMono = Cutive_Mono({
  subsets: ['latin'],
  weight: ['400'],
})