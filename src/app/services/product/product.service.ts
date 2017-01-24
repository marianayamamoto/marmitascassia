import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class ProductService {
	constructor(private af: AngularFire) { }
	getProducts() {
		return this.af.database.list('/products');
	} 
	getProduct(id: number) {
	  	return this.af.database.object('/products/'+id);
	}
}