import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';

@Component({
  moduleId: module.id,
  selector: 'product-form',
  templateUrl: '../../views/product/product-form.component.html'
  })

  export class ProductFormComponent implements OnInit {   
    constructor(private productService: ProductService) { }
    model: Product = null;
    //TODO:get categories from DB
    categories = ['Marmita', 'Bebida', 'Outro'];
    submitted = false;
    newProduct() {
      this.model = new Product('', '', 0);
    }
    onSubmit() {
      this.productService.createProduct(this.model)
        .then(item => {
          this.submitted = true;
        });
    }
    ngOnInit(): void {
      this.newProduct();
    }
  }
