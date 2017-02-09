import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'product-detail',
  templateUrl: '../../views/product/product-detail.component.html'
  //styleUrls: [ 'heroes.component.css' ]
})
export class ProductDetailComponent implements OnInit {
	constructor(
  		private productService: ProductService,
  		private route: ActivatedRoute,
  		private location: Location
	) {}
	ngOnInit(): void {
  		this.route.params
		    .map(params => params['id'])
		    .switchMap(id => this.productService.getProduct(id))
	    	.subscribe(product => 
	    		this.product = product
    		);
	}
	goBack(): void {
	  this.location.back();
	}
  	@Input()
  	product: Product;
}
