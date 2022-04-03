import { camelCaseToPascalCase } from "@core/utils";
import type { Schema, SchemaBase } from "@core/types";

export function generateStoreSchema<T extends SchemaBase.Store>(object: T) {
	const entries = Object.entries(object) as any[][];

	const propertiesSetters = entries
		.filter(([_, value]) => typeof value !== "function")
		.flatMap(([key, value]) => [
			[
				`set${camelCaseToPascalCase(key)}`,
				function (this: any, value: any) {
					this[key] = value;
				},
			],
			[
				`reset${camelCaseToPascalCase(key)}`,
				function (this: any) {
					this[key] = value;
				},
			],
		]);

	return Object.fromEntries([...entries, ...propertiesSetters]) as Schema.Store<T>;
}
