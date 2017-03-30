import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { CategoryService } from '../shared/category.service';
import { Category } from '../shared/category';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DialogsService } from '../../confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'category-list',
  templateUrl: 'category-list.component.html'
  })

  export class CategoryListComponent implements OnInit {
    constructor(private categoryService: CategoryService, public toastr: ToastsManager,
      private dialogsService: DialogsService) {
    }
    categories: Category[];
    selectedCategory: Category;
    onSelect(category): void {
      this.selectedCategory = category;
    };
    getCategories(): void {
      this.categoryService.getCategories()
        .subscribe(categories => {
          this.categories = categories
        });
    }
    removeCategory(id: string): void {
      this.categoryService.remvoveCategory(id)
        .then(_ =>
          {
            this.toastr.success('Categoria removida com sucesso!', 'Successo!');
          })
        ;
    }
    openDialog(id: string) {
      this.dialogsService
      .confirm('Confirmação', 'Você tem certeza disso?')
      .subscribe(res => {
        if(res) {
          this.removeCategory(id);
        }
      });
    }
    ngOnInit(): void {
      this.getCategories();
    }
  }
