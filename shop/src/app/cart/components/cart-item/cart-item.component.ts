import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from "../../models/cart-item-model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item!: CartItemModel;

  @Output() increaseCartItem = new EventEmitter<CartItemModel['id']>(); // можно и так
  @Output() decreaseCartItem = new EventEmitter<number>();
  @Output() deleteCartItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrease(productId: number): void {
    this.increaseCartItem.emit(productId);
  }

  onDecrease(productId: number): void {
    this.decreaseCartItem.emit(productId);
  }

  onDelete(productId: number): void {
    this.deleteCartItem.emit(productId);
  }
}