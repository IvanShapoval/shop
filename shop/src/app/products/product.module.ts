import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductItemComponent,
  ],
  exports: [
    ProductComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }