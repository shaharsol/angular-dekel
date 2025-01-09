import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRedux } from '@reduxjs/angular-redux';
import { store } from './store';
import { jwtInterceptor } from './interceptors/jwt.interceptor';
import { xClientIdInterceptor } from './interceptors/x-client-id.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([jwtInterceptor, xClientIdInterceptor])),
    provideRedux({ store })
]
};
