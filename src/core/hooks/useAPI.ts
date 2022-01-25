/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect } from "react";

import { useLocalStore } from "@core/hooks";
import type { API, Take } from "@core/types";

function useAPI<
	F extends API.Service.Function<API.Response<any>>,
	R extends Take.FromServiceFunction.Response<F>,
	P extends Parameters<F>
>({ service, isPendingAfterMount = false, ignoreHTTPErrors = false }: Options<F>) {
	const localStore = useLocalStore({ isPending: isPendingAfterMount });

	const call = useCallback(
		async (...params: P): Promise<R["result"]> => {
			localStore.setIsPending(true);

			try {
				const { data } = await service(...params);
				const { result } = data;

				return result;
			} catch (error) {
				if (ignoreHTTPErrors === false) {
					console.error(error);
				}

				throw error;
			} finally {
				localStore.setIsPending(false);
			}
		},
		[service, ignoreHTTPErrors]
	);

	const isPending = useCallback(() => {
		return localStore.isPending;
	}, []);

	useEffect(() => {
		localStore.setIsPending(isPendingAfterMount);
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
