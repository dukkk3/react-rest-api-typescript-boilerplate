import { Switch, Route } from "react-router-dom";

// import { Main } from "../pages/Main";
// import {Product} from "../pages/Product";

import { routesConfig } from "@core/config";

export const Routes: React.FC = () => {
	return (
		<Switch>
			<Route exact path='/'>
				{/* <Main /> */}
			</Route>
			<Route exact path={routesConfig.productBrowserRoutes.findOne()}>
				{/* <Product /> */}
			</Route>
		</Switch>
	);
};
