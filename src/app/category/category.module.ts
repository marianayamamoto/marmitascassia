import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailComponent } from './category-detail/category-detail.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryService } from './shared/category.service';
import { MaterialModule } from '@angular/material';

@NgModule({
    imports: [
        BrowserModule,
        CategoryRoutingModule,
        FormsModule,
        MaterialModule
    ],
    exports: [
        MaterialModule
    ],
    declarations: [
        CategoryDetailComponent,
        CategoryListComponent,
        CategoryFormComponent
    ],
    providers: [CategoryService]
})

export class CategoryModule {

}
