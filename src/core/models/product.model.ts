export interface ProductModel {
	id: number;
	name: string;
	price: number;
	info: {
		description: string;
		note: string;
	};
}
