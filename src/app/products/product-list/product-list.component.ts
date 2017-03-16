import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogsService } from '../../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'product-list',
  templateUrl: 'product-list.component.html'
  })

  export class ProductListComponent implements OnInit {
    constructor(private productService: ProductService, public toastr: ToastsManager,
      private dialogsService: DialogsService) {
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
    openDialog(id: string) {
      this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe(res => {
        if(res) {
          this.removeProduct(id);
        }
      });
    }
    ngOnInit(): void {
      this.getProducts();
    }
  }
