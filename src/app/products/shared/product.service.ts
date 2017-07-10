import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Product } from './product';
import * as firebase from 'firebase/app';

@Injectable() export class ProductService {

  db;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getProducts(): FirebaseListObservable<Product[]> {

    return this.db.list('/products');

  }

  getProductsByCategory(category: string): FirebaseListObservable<Product[]> {

    return this.db.list('/products', {
      query: {
        orderByChild: 'category',
        equalTo: category
      }
    });

  }

  getProduct(id: string): FirebaseObjectObservable<Product> {

    return this.db.object(`/products/${id}`);

  }

  createProduct(prod: Product) {

    return this.db.list('/products').push(prod);

  }

  updateProduct(prod: any, create: boolean): firebase.Promise<void> {

    if (create) {

      return this.createProduct(prod);

    }

    var key = prod.$key;

    delete prod.$key;
    delete prod.$exists;

    return this.getProducts().update(key, prod);

  }

  remvoveProduct(id: string): firebase.Promise<void> {

    return this.getProduct(id).remove();

  }
}
