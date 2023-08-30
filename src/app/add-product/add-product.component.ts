import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Product} from "../products-table/interfaces/product";
import {CategoriesService} from "../services/categories.service";
import {Category} from "../interfaces/category";

type CreateProduct = Omit<Product, 'id' | 'productId'>

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [''],
    productStatusId: [''],
    categoryId: ['']
  })

  categories: Category[] = [];

  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService) {}

  onCreateProduct(): void {
    console.log(this.productForm)
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe(categories => {
      console.log(categories)
    })
  }

  ngOnInit() {
    this.getCategories();
  }
}
