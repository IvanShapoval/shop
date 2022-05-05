import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { ProductModel } from '../../models/product-model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() products: ProductModel[] = [];
  @Output() addProductToCart = new EventEmitter<ProductModel>();
  
  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

 async ngOnInit(): Promise<void> {
    this.products = await this.productsService.getProducts();
  }

  public onBuy(product: ProductModel): void {
    this.cartService.addItemToCart(product);
  }
}
