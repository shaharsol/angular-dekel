import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  
  if(req.url.includes('/login')) return next(req)

  const authService = inject(AuthService)

  const reqWithJwt = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${authService.jwt()}`)
  })

  return next(reqWithJwt);
};
