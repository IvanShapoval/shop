import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartItemModel} from "../../models/cart-item-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() items: CartItemModel[] = [];
  @Input() totalSum = 0;
  @Input() totalQuantity = 0;

  @Output() increaseCartItem = new EventEmitter<number>();
  @Output() decreaseCartItem = new EventEmitter<number>();
  @Output() deleteCartItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onIncrease(cartItemId: number): void {
    this.increaseCartItem.emit(cartItemId);
  }

  onDecrease(cartItemId: number): void {
    this.decreaseCartItem.emit(cartItemId);
  }

  onDelete(cartItemId: number): void {
    this.deleteCartItem.emit(cartItemId);
  }
}