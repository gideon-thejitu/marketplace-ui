import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";
import {firstValueFrom} from "rxjs";

export const authGuard: CanActivateFn = async (_, state) => {
  const service = inject(AuthService);
  const router = inject(Router);

  const authenticated = await firstValueFrom(service.checkIsAuthenticated())

  if (!authenticated) {
    return router.createUrlTree(['auth/signin'], { queryParams: { next: state.url }})
  }

  return authenticated;
};
