import { useLocalObservable } from "mobx-react-lite";

import { schemaHelpers } from "../helpers";
import type { SchemaBase } from "../types";

export function useLocalStore<T extends SchemaBase.Store>(object: T) {
	const localStore = useLocalObservable(() => schemaHelpers.createStoreSchema(object));

	return localStore;
}
