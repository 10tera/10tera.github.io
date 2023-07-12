import React from "react";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { style } from "../assets/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Global styles={style} />
      <Component {...pageProps} />
    </React.Fragment>
  );
}
