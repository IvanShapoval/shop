export enum CategoryEnum{
    Cars = 'Cars'
}

export interface ProductModel {
    id: number,
    name: string,
    description: string,
    price: number,
    category: CategoryEnum,
    isAvailable: boolean,
}