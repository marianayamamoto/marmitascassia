import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Category } from './category';

@Injectable() export class CategoryService {

  constructor(private af: AngularFire) {}

  getCategories(): FirebaseListObservable<Category[]> {

    return this.af.database.list('/category');

  }

  getCategory(id: string): FirebaseObjectObservable<Category> {

    return this.af.database.object(`/category/${id}`);

  }

  createCategory(prod: Category) {

    return this.af.database.list('/category').push(prod);

  }

  updateCategory(prod: any, create: boolean): firebase.Promise<void> {

    if (create) {

      return this.createCategory(prod);

    }

    var key = prod.$key;
    var category = this.getCategory(key);
    var new_category = new Category();

    delete prod.$key;
    delete prod.$exists;

    return this.getCategories().update(key, prod);

  }

  remvoveCategory(id: string): firebase.Promise<void> {

    return this.getCategory(id).remove();

  }
}
