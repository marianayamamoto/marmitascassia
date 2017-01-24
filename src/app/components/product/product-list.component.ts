import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product/product.service';


@Component({
  selector: 'product-list',
  templateUrl: '../../views/product/product-list.component.html'
  })

  export class ProductsListComponent implements OnInit {   
    constructor(private productService: ProductService) { }
    products;
    selectedProduct = null;
    onSelect(product): void {
      this.selectedProduct = product;
    };
    getProducts(): void {
      this.products = this.productService.getProducts();
    }
    ngOnInit(): void {
      this.getProducts();
    }
  }
