import { toPascalCase } from "../utils";
import type { Schema, SchemaBase } from "../types";

export function createStoreSchema<T extends SchemaBase.Store>(object: T) {
	return Object.entries(object).reduce((acc, [key, value]: any) => {
		return {
			...acc,
			[key]: value,
			[`set${toPascalCase(key)}`]: function (value: any) {
				(this as any)[key] = value;
			},
		};
	}, {} as Schema.Store<T>);
}
