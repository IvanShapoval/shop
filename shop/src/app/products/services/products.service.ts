import { Injectable } from '@angular/core';
import { CategoryEnum, ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor() { }

  public getProducts(): Promise<ProductModel[]> {
    const products: ProductModel[] = [
      {id: 1, name: 'Skoda Octavia', description: '', price: 2000, category: CategoryEnum.Cars, isAvailable: true},
      {id: 1, name: 'Chevrolet Lacetti', description: '', price: 1700, category: CategoryEnum.Cars, isAvailable: true},
      {id: 1, name: 'Skoda Karoq', description: '', price: 3000, category: CategoryEnum.Cars, isAvailable: true},
      {id: 1, name: 'Volkswagen Passat', description: '', price: 2500, category: CategoryEnum.Cars, isAvailable: true}
    ]

    return Promise.resolve(products);
  }
}
