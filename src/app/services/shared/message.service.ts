import { Injectable } from '@angular/core';
import {NzMessageService} from "ng-zorro-antd/message";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(public nzMessageService: NzMessageService) { }

  successMessage(value: string) {
    this.nzMessageService.create("success", value)
  }

  errorMessage(value: string) {
    this.nzMessageService.create("error", value)
  }
}
