export interface Product {
  readonly id: number;
  readonly productId: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  categoryId: number;
  productStatusId: number;
}
