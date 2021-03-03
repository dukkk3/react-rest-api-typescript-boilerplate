import type { Schema } from "../../types";

const app: App = {
	userID: {
		value: null,
		set: function (value) {
			this.value = value;
		},
	},
};

export { app };
export type App = Schema.Store<{
	userID: number | null;
}>;
