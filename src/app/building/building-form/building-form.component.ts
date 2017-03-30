import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Building } from '../shared/building';
import { BuildingService } from '../shared/building.service';



@Component({
  selector: 'building-form',
  templateUrl: './building-form.component.html'
  })

  export class BuildingFormComponent implements OnInit {

    formTitle: String;
    model: Building = null;
    isNew: boolean;
    submitted: boolean = false;

    constructor(private buildingService: BuildingService,
      private route: ActivatedRoute,
      private location: Location,
      private router : Router) {

    }

    //TODO:get buildings from DB

    newBuilding() {
      this.model = new Building();
    }

    onSubmit() {
      this.buildingService.updateBuilding(this.model, this.isNew)
      .then(_ => {
        this.submitted = true;

        if (this.isNew) {

          this.router.navigate([`/buildings`]);

        } else {

          this.router.navigate([`buildings/detail/${this.model.$key}`]);

        }

      });
    }

    onChange(value) {
      if (!this.isNew) {
        this.formTitle = 'Editando Predio: ' + value;
      }
    }

    goBack() {
  	  this.router.navigate([`/buildings`]);
  	}

    ngOnInit() {
      this.route.params.subscribe((params) => {
        if(params['id']) {
          this.isNew = false;
          this.route.params
            .map(params => params['id'])
            .switchMap(id => this.buildingService.getBuilding(id))
            .subscribe(building => {
              this.model = building,
              this.formTitle = 'Editando Predio: ' + building.name
            });
        } else {
          this.formTitle = 'Novo Predio';
          this.isNew = true;
          this.newBuilding();
        }
      });
    }
  }
