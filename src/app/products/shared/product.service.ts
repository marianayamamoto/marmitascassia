import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Product } from './product';


@Injectable()
export class ProductService {
	constructor(private af: AngularFire) { }
	getProducts(): FirebaseListObservable<Product[]> {
		return this.af.database.list('/products');
	}
	getProduct(id: string): FirebaseObjectObservable<Product> {
	  	return this.af.database.object(`/products/${id}`);
	}
	createProduct(prod: Product) {
		return this.af.database.list('/products').push(prod);
	}
	updateProduct(prod: Product, create: boolean): firebase.Promise<void> {
		if(create) {
			return this.createProduct(prod);
		}
		const key = prod.$key;

		delete prod.$key;
		//var sent = prod.json();
		//debugger;
		return this.getProducts().update(key, {name: prod.name});
	}
	remvoveProduct(id: string): firebase.Promise<void> {
		return this.getProduct(id).remove();
	}
}
