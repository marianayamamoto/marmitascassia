import { BaseModel } from '../../shared/base.model';

export class Product extends BaseModel {
	name: string;
	category: string;
	price: number;
	constructor(
		name: string,
		category: string,
		price: number
	) {
		super();
		this.name = name;
		this.category = category;
		this.price = price;
	};
}
