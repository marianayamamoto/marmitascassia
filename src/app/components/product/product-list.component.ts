import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../../services/product/product.service';
import { Product } from '../../models/product';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'product-list',
  templateUrl: '../../views/product/product-list.component.html'
  })

  export class ProductsListComponent implements OnInit {   
    constructor(private productService: ProductService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
      this.toastr.setRootViewContainerRef(vcr);
    }
    products: Product[];
    selectedProduct: Product = null;
    onSelect(product): void {
      this.selectedProduct = product;
    };
    getProducts(): void {
      this.productService.getProducts()
        .subscribe(products => {
          this.products = products
        });
    }
    removeProduct(id: string): void {
      this.productService.remvoveProduct(id)
        .then(_ => 
          {
            this.toastr.success('You are awesome!', 'Success!');
          })
        ;
    }
    ngOnInit(): void {
      this.getProducts();
    }
  }
