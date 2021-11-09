import { transparentize } from "polished";

export const theme = {
	colors: {
		common: {
			primary: "#2648f1",
			intense: "#151e27",
			orange: "#fdb549",
			yellow: "#ffe243",
			white: "white",
		},
		complex: {
			border: transparentize(0.85, "#626b73"),
			translucentGrey: transparentize(0.95, "#626b73"),
		},
	},
	sizes: {
		html: {
			font: "10px",
		},
		common: {
			borderRadius: ".3rem",
			fontSizePrimary: "1.3rem",
			fontSizeSecondary: "1.2rem",
		},
	},
};
