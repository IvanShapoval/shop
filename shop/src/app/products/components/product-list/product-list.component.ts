import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  @Output() addProductToCart = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  public onAddProductToCart(product: ProductModel): void{
    this.addProductToCart.emit(product);
  }

}
