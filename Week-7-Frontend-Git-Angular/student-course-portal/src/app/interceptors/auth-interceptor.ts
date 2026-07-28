// src/app/interceptors/auth.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({
    setHeaders: {
      Authorization: 'Bearer mock-token-12345'
    }
  });

  // LOG TO CONSOLE TO VERIFY
  console.log(' Auth Interceptor Attached Header:', authReq.headers.get('Authorization'));
  console.log('🚀 Request intercepted! Auth Header:', authReq.headers.get('Authorization'));

  return next(authReq);
};