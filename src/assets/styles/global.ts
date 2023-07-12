import {Inter} from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "400"
});

const globalStyle = {
    ...inter.style,
};

export const style = {
    body: globalStyle
};