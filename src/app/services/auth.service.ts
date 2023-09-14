import { Injectable } from '@angular/core';
import {HttpApiService} from "../core/services/http-api.service";
import {environment} from "../../environments/environment";
import {Auth} from "../interfaces/auth";
import {BehaviorSubject, map, of} from "rxjs";
import jwtDecode from "jwt-decode";
import * as localforage from "localforage";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {MessageService} from "./shared/message.service";
import {ActivatedRoute, Router, Routes} from "@angular/router";

const JWT_KEY = 'marketplace-jwt'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = `${environment.ApiBaseUrl}`;
  currentUser: BehaviorSubject<{ email: string } | object> = new BehaviorSubject({});
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private httpApi: HttpApiService,
              private messages: MessageService,
              private route: ActivatedRoute,
              private router: Router) { }

  authenticate(value: { email: string, password: string}) {
    const url = this.baseUrl + '/auth'
    return this.httpApi.post<Auth>(url, value).pipe(map(value => {
      this.saveSession(value);
    }))
  }

  checkIsAuthenticated() {
    return fromPromise(localforage.getItem<Auth>(JWT_KEY).then((auth) => {
      if (auth === null) {
        return false
      }

      const isAllTokensAvailable = !!(auth.jwtToken && auth.refreshToken)

      if (!isAllTokensAvailable) {
        return false;
      }

      this.saveSession(auth)
      return isAllTokensAvailable;
    }))
  }

  onAuthenticationSuccess() {
    console.log('ca')
    const { queryParams} = this.route.snapshot;

    if (queryParams['next'] === undefined) {
      return this.router.navigate(['dashboard'])
    }

    const { next } = queryParams;

    return this.router.navigateByUrl(next);
  }

  private saveSession(value: Auth) {
    const decoded = jwtDecode<{ sub: string }>(value.jwtToken);
    const { sub } = decoded;
    localforage.setItem(JWT_KEY, value).then(() => {
      this.currentUser.next({ email: sub })
      this.isAuthenticated.next(true);
    })
  }

  private destroySession() {
    return fromPromise(localforage.removeItem(JWT_KEY).then(() => {
      this.isAuthenticated.next(false);
      this.currentUser.next({});
      return true;
    }).catch(() => {
      this.isAuthenticated.next(false);
      this.currentUser.next({});
      return true;
    }))
  }
}
