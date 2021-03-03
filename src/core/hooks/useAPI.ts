/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";
import { useLocalObservable } from "mobx-react-lite";
import type { API, Take, Schema } from "../types";

function useAPI<
	F extends API.Service.Function<API.Response<any>>,
	R extends Take.FromServiceFunction.Response<F>,
	P extends Parameters<F>
>({ service, isPendingAfterMount = false, ignoreHTTPErrors = false }: Options<F>) {
	const localStore = useLocalObservable(
		(): Store => ({
			isPending: {
				value: isPendingAfterMount,
				set: function (value) {
					this.value = value;
				},
			},
		})
	);

	const call = useCallback(
		async (...params: P): Promise<R["result"]> => {
			localStore.isPending.set(true);

			try {
				const { data } = await service(...params);
				const { result } = data;

				localStore.isPending.set(false);

				return result;
			} catch (error) {
				if (ignoreHTTPErrors === false) {
					console.error(error);
				}

				localStore.isPending.set(false);

				throw error;
			}
		},
		[service, ignoreHTTPErrors]
	);

	const isPending = useCallback(() => {
		return localStore.isPending.value;
	}, []);

	useEffect(() => {
		localStore.isPending.set(isPendingAfterMount);
	}, [isPendingAfterMount]);

	return {
		call,
		isPending,
	};
}

export { useAPI };
export interface Options<F> {
	service: F;
	isPendingAfterMount?: boolean;
	ignoreHTTPErrors?: boolean;
}

type Store = Schema.Store<{
	isPending: boolean;
}>;
