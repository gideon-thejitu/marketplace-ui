import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {
  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  get<T>(url: string) {
    return this.http.get<T>(url).pipe(catchError(this.handleError))
  }

  post<Response>(url: string, data: Object) {
    return this.http.post<Response>(url, data).pipe(catchError(this.handleError))
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
