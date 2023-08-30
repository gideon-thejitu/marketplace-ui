import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  get<T>(url: string, options?: any) {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError))
  }

  private handleError(error: any) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // client side error
      const { message } = error.error;
      errorMessage = message;
      console.group('Client Side Error')
      console.warn(errorMessage)
      console.groupEnd()
    } else {
      // server side error
      errorMessage = `Status Code: ${error.status} - Message: ${error.message}`
      console.group('Server Side Error')
      console.warn(errorMessage)
      console.groupEnd()
    }

    return throwError(() => {
      return errorMessage
    })
  }
}
