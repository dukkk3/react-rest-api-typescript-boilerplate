import { api } from "@core/api";
import { routesConfig } from "@core/config";
import type { ProductModels } from "@core/models";
import type { API } from "@core/types";

export function getOne(id: number) {
	return api.get<API.Service.Response.FindOne<ProductModels.Data>>(
		routesConfig.productAPIRoutes.findOne(id)
	);
}
