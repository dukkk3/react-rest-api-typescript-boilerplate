import type { AxiosResponse } from "axios";

export namespace API {
	export namespace Service {
		export namespace Response {
			export type Upsert<T> = Response<T | null>;
			export type FindOne<T> = Response<T | null>;
			export type FindMany<T> = Response<{
				rows: T[];
				totalRowCount: number;
				totalPageCount: number;
			}>;
		}
		export type Function<T extends API.Response<any>, U extends any[] = any[]> = (
			...params: U
		) => Promise<AxiosResponse<T>>;
	}
	export namespace Request {
		export type Filter = {
			columnName: string;
			operator: "equal" | "like" | "not" | "startsWith" | "endsWith";
			value: string | number | number[] | string[];
		};
	}
	export type Response<T> = {
		status: number;
		result: T;
	};
	export type Token = string;
}

export namespace Schema {
	export type Store<F extends SchemaBase.Store> = {
		[K in keyof F]: {
			value: F[K];
			set: (value: F[K]) => void;
		};
	};
}

export namespace SchemaBase {
	export type Store = { [s: string]: any };
}

export namespace Take {
	export namespace FromServiceFunction {
		export type Response<T> = T extends API.Service.Function<infer R> ? R : never;
		export type ResponseModel<T> = T extends API.Service.Function<
			API.Response<infer R | { rows: (infer R)[] }>
		>
			? R
			: never;
	}
}
