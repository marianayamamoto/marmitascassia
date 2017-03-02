import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html'
  })

  export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService, public toastr: ToastsManager) {
    }
    products: Product[];
    selectedProduct: Product;
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
            this.toastr.success('Produto removido com sucesso!', 'Successo!');
          })
        ;
    }
    ngOnInit(): void {
      this.getProducts();
    }
  }
