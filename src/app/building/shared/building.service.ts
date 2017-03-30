import { Inject, Injectable } from '@angular/core';
import { AngularFire, FirebaseRef, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { Building } from './building';

@Injectable() export class BuildingService {

  constructor(private af: AngularFire) {}

  getBuildings(): FirebaseListObservable<Building[]> {

    return this.af.database.list('/building');

  }

  getBuilding(id: string): FirebaseObjectObservable<Building> {

    return this.af.database.object(`/building/${id}`);

  }

  createBuilding(building: Building) {

    return this.af.database.list('/building').push(building);

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
