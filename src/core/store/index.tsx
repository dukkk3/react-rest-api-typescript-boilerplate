import { createContext } from "react";
import { useLocalObservable } from "mobx-react-lite";

import { app } from "./segments/app";

export const combinedStore = { app };
export const storeContext = createContext(combinedStore);
export function StoreProvider({ children }: { children: React.ReactNode }) {
	const store = useLocalObservable(() => combinedStore);
	return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
}
