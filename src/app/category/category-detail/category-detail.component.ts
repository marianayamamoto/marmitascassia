import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Category } from '../shared/category';
import { CategoryService } from '../shared/category.service';

@Component({
  selector: 'category-detail',
  templateUrl: './category-detail.component.html'
})

export class CategoryDetailComponent implements OnInit {
	constructor(
  		private categoryService: CategoryService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}
	ngOnInit(): void {
  		this.route.params
		    .map(params => params['id'])
		    .switchMap(id => this.categoryService.getCategory(id))
	    	.subscribe(category =>
	    		this.category = category
    		);
	}

	goBack(): void {
	  this.location.back();
	}

  	@Input()
  	category: Category;
}
