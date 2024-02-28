import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {APP_ROUTES} from "../shared/constanst";
import {MessageService} from "./shared/message.service";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router, private messageService: MessageService) { }

  public handleHTTPResponse(response: HttpErrorResponse) {
    const { status, error } = response;

    switch (status) {
      case 403: {
        this.messageService.errorMessage(error?.message || "Forbidden")
        return this.router.navigate([APP_ROUTES.login])
      }

      default: {
        return
      }
    }
  }
}
