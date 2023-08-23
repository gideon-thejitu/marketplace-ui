import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  productForm = this.formBuilder.group({
    name: [''],
    description: [''],
    price: [''],
    productStatusId: [''],
    categoryId: ['']
  })
  constructor(private formBuilder: FormBuilder) {
  }
}
