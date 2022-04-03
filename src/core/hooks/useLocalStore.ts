import { useLocalObservable } from "mobx-react-lite";

import { schemaHelpers } from "@core/helpers";
import type { SchemaBase } from "@core/types";

export function useLocalStore<T extends SchemaBase.Store>(object: T) {
	return useLocalObservable(() => schemaHelpers.generateStoreSchema(object));
}
