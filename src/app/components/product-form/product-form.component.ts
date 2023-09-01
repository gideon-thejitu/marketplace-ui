import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {CategoriesService} from "../../services/categories.service";
import {Category} from "../../interfaces/category";
import {ProductsService} from "../../services/products.service";
import {ProductStatus} from "../../interfaces/product-status";
import {MessageService} from "../../services/shared/message.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() submitting = false;
  @Input() categories: Category[] = [];
  @Input() productStatuses: ProductStatus[] = []
  @Output() formSubmitted = new EventEmitter<object>();

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    discountedPrice: ['', [Validators.required]],
    productStatusId: ['', [Validators.required]],
    categoryId: ['', [Validators.required]]
  })

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    this.formSubmitted.emit(this.productForm.value)
  }
}
