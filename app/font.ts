import { Geist_Mono } from "next/font/google";
import localfont from "next/font/local";

export const ppneuemontreal = localfont({
  src: [
    {
      path: "../public/font/ppneuemontreal-thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/font/ppneuemontreal-book.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/ppneuemontreal-italic.woff",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/font/ppneuemontreal-medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/font/ppneuemontreal-semibolditalic.woff",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/font/ppneuemontreal-bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const rocoleta = localfont({
  src: [
    {
      path: "../public/font/Recoleta-RegularDEMO.otf",
      weight: "400",
      style: "mormal",
    },
  ],
});
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
});
