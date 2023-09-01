import {Category} from "../../interfaces/category";
import {ProductStatus} from "../../interfaces/product-status";

export interface Product {
  readonly id: number;
  readonly productId: string;
  name: string;
  description: string;
  price: number;
  discountedPrice: number;
  categoryId: number;
  category: Category,
  productStatusId: number;
  productStatus: ProductStatus
}
