import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Category } from './category';

@Injectable() export class CategoryService {

  constructor(private af: AngularFire) {}

  getCategories(): FirebaseListObservable<Category[]> {

    return this.af.database.list('/category');

  }

  getCategoriesAndProducts(): FirebaseListObservable<any> {

    return this.af.database.list('/category', {
      query: {
        orderByChild: 'category'
      }
    });
  }

  getCategory(id: string): FirebaseObjectObservable<Category> {

    return this.af.database.object(`/category/${id}`);

  }

  createCategory(category: Category) {

    return this.af.database.list('/category').push(category);

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
