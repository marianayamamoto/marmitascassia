import { Inject, Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Building } from './building';
import * as firebase from 'firebase/app';

@Injectable() export class BuildingService {
  db;

  constructor(db: AngularFireDatabase) {
    this.db = db;
  }

  getBuildings(): FirebaseListObservable<Building[]> {

    return this.db.list('/building');

  }

  getBuilding(id: string): FirebaseObjectObservable<Building> {

    return this.db.object(`/building/${id}`);

  }

  createBuilding(building: Building) {

    return this.db.list('/building').push(building);

  }

  updateBuilding(building: any, create: boolean): firebase.Promise<void> {

    if (create) {

      return this.createBuilding(building);

    }

    var key = building.$key;

    delete building.$key;
    delete building.$exists;

    return this.getBuildings().update(key, building);

  }

  removeBuilding(id: string): firebase.Promise<void> {

    return this.getBuilding(id).remove();

  }
}
