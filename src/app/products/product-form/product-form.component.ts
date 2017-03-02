import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { Product } from '../shared/product';
import { ProductService } from '../shared/product.service';


@Component({
  selector: 'product-form',
  templateUrl: './product-form.component.html'
  })

  export class ProductFormComponent implements OnInit {

    formTitle: String;
    model: Product = null;
    isNew: boolean;
    categories = ['Marmita', 'Bebida', 'Outro'];
    submitted: boolean = false;

    constructor(private productService: ProductService,
      private route: ActivatedRoute,
      private location: Location,
      private router : Router) {

    }

    //TODO:get categories from DB

    newProduct() {
      this.model = new Product();
    }

    onSubmit() {
      this.productService.updateProduct(this.model, this.isNew)
      .then(_ => {
        this.submitted = true;

        if (this.isNew) {

          this.router.navigate([`/products`]);

        } else {

          this.router.navigate([`products/detail/${this.model.$key}`]);

        }

      });
    }

    onChange(value) {
      this.formTitle = 'Editando Produto: ' + value;
    }

    goBack(): void {
  	  this.location.back();
  	}

    ngOnInit(): void {
      this.route.params.subscribe((params) => {
        if(params['id']) {
          this.isNew = false;
          this.route.params
            .map(params => params['id'])
            .switchMap(id => this.productService.getProduct(id))
            .subscribe(product => {
              this.model = product,
              this.formTitle = 'Editando Produto: ' + product.name
            });
        } else {
          this.formTitle = 'Novo Produto';
          this.isNew = true;
          this.newProduct();
        }
      });
    }
  }
