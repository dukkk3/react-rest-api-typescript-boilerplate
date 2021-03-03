import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StoreProvider } from "./core/store";
import { CommonStyles } from "./styles";
import { theme } from "./core/theme";
import { App } from "./app";

import reportWebVitals from "./reportWebVitals";

const appElement = document.getElementById("app");

ReactDOM.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CommonStyles />
			<BrowserRouter>
				<StoreProvider>
					<App />
				</StoreProvider>
			</BrowserRouter>
		</ThemeProvider>
	</React.StrictMode>,
	appElement
);

reportWebVitals();
