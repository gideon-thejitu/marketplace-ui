import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../services/categories.service";
import {ProductsService} from "../services/products.service";
import {MessageService} from "../services/shared/message.service";
import {Router} from "@angular/router";
import {Category} from "../interfaces/category";
import {ProductStatus} from "../interfaces/product-status";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  submitting = false;
  categoryParams = {
    page: 1,
    limit: 100
  }
  productStatusesParams = {
    page: 1,
    limit: 100
  }
  categories: Category[] = [];
  productStatuses: ProductStatus[] = []
  constructor(private categoriesService: CategoriesService,
              private productsServices: ProductsService,
              private message: MessageService,
              private router: Router) {}

  ngOnInit() {
    this.getCategories();
    this.getStatuses();
  }

  getCategories() {
    this.categoriesService.getCategories(this.categoryParams).subscribe((categories) => {
      this.categories = categories.results;
    })
  }

  getStatuses(){
    this.productsServices.getStatuses(this.productStatusesParams).subscribe(statuses => {
      this.productStatuses = statuses.results;
    })
  }

  onCreateProduct(value: object) {
    this.submitting = true;
    this.productsServices.createProduct(value).subscribe(() => {
      this.submitting = false;
      this.message.successMessage("Product created")
      this.router.navigate(['/dashboard/products'])
    }, () => {
      this.submitting = false
      this.message.errorMessage("Something went wrong")
    })
  }
}
