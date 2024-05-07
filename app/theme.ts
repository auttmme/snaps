import { extendTheme } from "@chakra-ui/react";

const config = {
	initialColorMode: "light",
	useSystemColorMode: false,
	styles: {
		global: {
			body: {
				bg: "#F7FAFC",
			},
		},
	},
	fonts: {
		heading: "var(--font-merryweather)",
		body: "var(--font-merryweather)",
	},
	colors: {
		primary: {
			100: "#406EB5",
		},
	},
};

const customTheme = extendTheme(config);

export default customTheme;
