import {ProductModel} from "../../products/models/product-model";
import {CartItemModel} from "../models/cart-item-model";

export class CartService {
  private _items: CartItemModel[] = [];

  get items(): CartItemModel[] {
    return this._items;
  }

  get totalSum(): number {
    return this._items.reduce((sum: number, current: CartItemModel) => sum + current.totalPrice, 0);
  }

  get totalQuantity(): number {
    return this._items.reduce((sum: number, current: CartItemModel) => sum + current.quantity, 0);
  }

  addItemToCart(item: ProductModel): void {
    let cartItem = this.items.find(x => x.id === item.id);
    if (cartItem) {
      cartItem.addProduct(item);

      return;
    }

    this.items.push(CartItemModel.createFromProduct(item));
  }

  increaseQuantity(productId: number): void {
    let item = this.items.find(x => x.id === productId);
    if (!item) {
      throw new Error('Invalid product id');
    }

    item.increaseQuantity();
  }

  decreaseQuantity(productId: number): void {
    let item = this.items.find(x => x.id === productId);
    if (!item) {
      throw new Error('Invalid product id');
    }

    if (item.quantity === 1) {
      const idx = this.items.findIndex(x => x.id === productId);
      this.items.splice(idx, 1);

      return;
    }

    item.decreaseQuantity();
  }

  deleteItem(productId: number): void {
    let idx = this.items.findIndex(x => x.id === productId);
    if (idx === -1) {
      throw new Error('Invalid product id');
    }

    this.items.splice(idx, 1);
  }
}