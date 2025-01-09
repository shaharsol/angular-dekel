import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { XClientIdService } from '../services/x-client-id.service';

export const xClientIdInterceptor: HttpInterceptorFn = (req, next) => {
  
  const xClientIdService = inject(XClientIdService)

  const reqWithXClientId = req.clone({
    headers: req.headers.set('x-client-id', xClientIdService.xClientId)
  })

  return next(reqWithXClientId);
};
