import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Building } from '../shared/building';
import { BuildingService } from '../shared/building.service';

@Component({
  selector: 'building-detail',
  templateUrl: './building-detail.component.html'
})

export class BuildingDetailComponent implements OnInit {
	constructor(
  		private buildingService: BuildingService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}
	ngOnInit(): void {
  		this.route.params
		    .map(params => params['id'])
		    .switchMap(id => this.buildingService.getBuilding(id))
	    	.subscribe(building =>
	    		this.building = building
    		);
	}

	goBack(): void {
	  this.location.back();
	}

  	@Input()
  	building: Building;
}
