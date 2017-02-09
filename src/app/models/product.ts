export class Product {
	$key: string;
	name: string;
	category: string;
	price: number;
	constructor(key: string, name: string, category: string, price: number) {
		this.$key = key;
		this.name = name;
		this.category = category;
		this.price = price;
	};
}