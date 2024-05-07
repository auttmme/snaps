import { Merriweather } from "next/font/google";

const merryweather = Merriweather({
	subsets: ["latin"],
	variable: "--font-merryweather",
	weight: ["300", "400", "700", "900"],
});

export const fonts = {
	merryweather,
};
