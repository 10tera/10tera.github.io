import {Inter} from "next/font/google";
import {GlobalProps} from "@emotion/react";

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
});

const globalStyle: GlobalProps["styles"] = {
    ...inter.style,
    backgroundColor: "#242529"
};

export const style: GlobalProps["styles"] = {
    body: globalStyle
};