import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoriesService} from "../services/categories.service";
import {Category} from "../interfaces/category";
import {ProductsService} from "../services/products.service";
import {ProductStatus} from "../interfaces/product-status";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    productStatusId: ['', [Validators.required]],
    categoryId: ['', [Validators.required]]
  })

  productStatusesParams = {
    page: 1,
    limit: 100
  }
  categoryParams = {
    page: 1,
    limit: 100
  }
  categories: Category[] = [];
  productStatuses: ProductStatus[] = []

  constructor(private formBuilder: FormBuilder,
              private categoriesService: CategoriesService,
              private productsServices: ProductsService) {}

  onCreateProduct(): void {
    console.log(this.productForm)
  }

  getCategories() {
    this.categoriesService.getCategories(this.categoryParams).subscribe(categories => {
      this.categories = categories.results;
    })
  }

  getStatuses(){
    this.productsServices.getStatuses(this.productStatusesParams).subscribe(statuses => {
      this.productStatuses = statuses.results;
    })
  }

  ngOnInit() {
    this.getCategories();
    this.getStatuses();
  }
}
