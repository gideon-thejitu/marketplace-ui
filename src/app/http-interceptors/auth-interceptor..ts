import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {AuthorizationService} from "../services/authorization.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authorizationService: AuthorizationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) => {
          console.log({event})
        },
        error: (_error) => {
          return this.authorizationService.handleHTTPResponse(_error)
        },
      })
    )
  }
}
