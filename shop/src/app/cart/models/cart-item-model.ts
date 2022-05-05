import {ProductModel} from "../../products/models/product-model";

export class CartItemModel {
  constructor(
    private _id: number,
    private _name: string,
    private _quantity: number,
    private _price: number,
    private _totalPrice: number,
  ) {
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get quantity(): number {
    return this._quantity;
  }

  get price(): number {
    return this._price;
  }

  get totalPrice(): number {
    return this._totalPrice;
  }

  public static createFromProduct(product: ProductModel): CartItemModel {
    return new CartItemModel(
      product.id,
      product.name,
      1,
      product.price,
      product.price,
    );
  }

  public addProduct(product: ProductModel): void {
    if (product.id !== this._id) {
      throw new Error('Invalid product');
    }

    this._totalPrice += product.price;
    this._quantity++;
  }

  public increaseQuantity(): void {
    this._totalPrice += this._price;
    this._quantity++;
  }

  public decreaseQuantity(): void {
    if (this._quantity === 1) {
      throw new Error('Can not decrease quantity to 0');
    }

    this._totalPrice -= this._price;
    this._quantity--;
  }
}