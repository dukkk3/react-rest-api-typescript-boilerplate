import { api } from "../api";
import { routesConfig } from "../config";
import type { ProductModel } from "../models";
import type { API } from "../types";

export function getOne(id: number) {
	return api.get<API.Service.Response.FindOne<ProductModel>>(
		routesConfig.productAPIRoutes.findOne(id)
	);
}
