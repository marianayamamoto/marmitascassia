import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { DailyMenu } from '../shared/daily-menu';
import { DailyMenuService } from '../shared/daily-menu.service';

@Component({
  selector: 'daily-menu-detail',
  templateUrl: './daily-menu-detail.component.html'
})

export class DailyMenuDetailComponent implements OnInit {
	constructor(
  		private dailyMenuService: DailyMenuService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}
	ngOnInit(): void {
  		this.route.params
		    .map(params => params['id'])
		    .switchMap(id => this.dailyMenuService.getDailyMenu(id))
	    	.subscribe(dailyMenu =>
	    		this.dailyMenu = dailyMenu
    		);
	}

	goBack(): void {
	  this.location.back();
	}

  	@Input()
  	dailyMenu: DailyMenu;
}
