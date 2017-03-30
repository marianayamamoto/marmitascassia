import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { DailyMenu } from './daily-menu';

@Injectable() export class DailyMenuService {

  constructor(private af: AngularFire) {}

  getDailyMenus(): FirebaseListObservable<DailyMenu[]> {

    return this.af.database.list('/daily_menus');

  }

  getDailyMenu(id: string): FirebaseObjectObservable<DailyMenu> {

    return this.af.database.object(`/daily_menus/${id}`);

  }

  createDailyMenu(dailyMenu: DailyMenu) {

    return this.af.database.list('/daily_menus').push(dailyMenu);

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
