import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			common: {
				primary: string;
				intense: string;
				orange: string;
				yellow: string;
				white: string;
			};
			complex: {
				border: string;
				translucentGrey: string;
			};
		};
		sizes: {
			html: {
				font: string;
			};
			common: {
				borderRadius: string;
				fontSizePrimary: string;
				fontSizeSecondary: string;
			};
		};
	}
}
