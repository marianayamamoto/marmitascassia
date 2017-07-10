import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { DailyMenu } from './daily-menu';
import * as firebase from 'firebase/app';

@Injectable() export class DailyMenuService {

  db;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getDailyMenus(): FirebaseListObservable<DailyMenu[]> {

    return this.db.list('/daily_menus');

  }

  getDailyMenu(id: string): FirebaseObjectObservable<DailyMenu> {

    return this.db.object(`/daily_menus/${id}`);

  }

  createDailyMenu(dailyMenu: DailyMenu) {

    return this.db.list('/daily_menus').push(dailyMenu);

  }

  updateDailyMenu(dailyMenu: any, create: boolean): firebase.Promise<void> {

    if (create) {

      return this.createDailyMenu(dailyMenu);

    }

    var key = dailyMenu.$key;

    delete dailyMenu.$key;
    delete dailyMenu.$exists;

    return this.getDailyMenus().update(key, dailyMenu);

  }

  removeDailyMenu(id: string): firebase.Promise<void> {

    return this.getDailyMenu(id).remove();

  }
}
