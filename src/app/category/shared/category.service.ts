import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Category } from './category';
import * as firebase from 'firebase/app';

@Injectable() export class CategoryService {

  db;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getCategories(): FirebaseListObservable<Category[]> {

    return this.db.list('/category');

  }

  getCategoriesAndProducts(): FirebaseListObservable<any> {

    return this.db.list('/category', {
      query: {
        orderByChild: 'category'
      }
    });
  }

  getCategory(id: string): FirebaseObjectObservable<Category> {

    return this.db.object(`/category/${id}`);

  }

  createCategory(category: Category) {

    return this.db.list('/category').push(category);

  }

  updateCategory(category: any, create: boolean): firebase.Promise<void> {

    if (create) {

      return this.createCategory(category);

    }

    var key = category.$key;

    delete category.$key;
    delete category.$exists;

    return this.getCategories().update(key, category);

  }

  remvoveCategory(id: string): firebase.Promise<void> {

    return this.getCategory(id).remove();

  }
}
