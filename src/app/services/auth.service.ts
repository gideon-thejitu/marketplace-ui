import { Injectable } from '@angular/core';
import {HttpApiService} from "../core/services/http-api.service";
import {environment} from "../../environments/environment";
import {Auth} from "../interfaces/auth";
import {BehaviorSubject, map} from "rxjs";
import jwtDecode from "jwt-decode";
import * as localforage from "localforage";

const JWT_KEY = 'marketplace-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.ApiBaseUrl}`;
  currentUser: BehaviorSubject<{ email: string }> = new BehaviorSubject(null as unknown as { email: string });
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpApi: HttpApiService) { }

  authenticate(value: { email: string, password: string}) {
    const url = this.baseUrl + '/auth'
    return this.httpApi.post<Auth>(url, value).pipe(map(value => {
      this.saveSession(value);
    }))
  }

  private saveSession(value: Auth) {
    const decoded = jwtDecode<{ sub: string }>(value.jwtToken);
    const { sub } = decoded;
    localforage.setItem(JWT_KEY, value).then(() => {
      this.currentUser.next({ email: sub })
      this.isAuthenticated.next(true);
    })
  }
}
