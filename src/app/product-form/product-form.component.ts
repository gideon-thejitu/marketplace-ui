import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoriesService} from "../services/categories.service";
import {Category} from "../interfaces/category";
import {ProductsService} from "../services/products.service";
import {ProductStatus} from "../interfaces/product-status";
import {MessageService} from "../services/shared/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  submitting = false;
  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discountedPrice: ['', [Validators.required]],
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
              private productsServices: ProductsService,
              private message: MessageService,
              private router: Router) {}

  onCreateProduct(): void {
    this.submitting = true;
    this.productsServices.createProduct(this.productForm.value).subscribe(() => {
      this.submitting = false;
      this.message.successMessage("Product created")
      this.router.navigate(['/dashboard/products'])
    }, () => {
      this.submitting = false
      this.message.errorMessage("Something went wrong")
    })

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

  ngOnInit() {
    this.getCategories();
    this.getStatuses();
  }
}
