import React from "react";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import {Global} from "@emotion/react";
import {style} from "../assets/styles/global";


const inter = Inter({subsets:["latin"]});

export default function App({ Component, pageProps }: AppProps) {
  return(
      <React.Fragment>
        <Global styles={style}/>
        <Component {...pageProps}/>
      </React.Fragment>
  );
}
