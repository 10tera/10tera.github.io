import { Inter } from "next/font/google";
import Emotion from "@emotion/react";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

const globalStyle: Emotion.GlobalProps["styles"] = {
  ...inter.style,
  backgroundColor: "#242529",
};

export const style: Emotion.GlobalProps["styles"] = {
  body: globalStyle,
};
