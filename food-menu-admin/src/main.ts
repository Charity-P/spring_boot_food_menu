// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { provideRouter } from '@angular/router';
// import { routes } from './app/app.routes';
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
// import { appConfig } from './app/app.config';
//
// bootstrapApplication(AppComponent, {
//   ...appConfig,
//   providers: [
//     provideRouter(routes),
//     provideAnimations(),
//     provideHttpClient(), // Ensure this is added
//     ...(appConfig.providers || []),
//   ],
// }).catch((err) => console.error(err));





import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch, HttpClientModule, withInterceptorsFromDi } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';




bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
//     provideHttpClient(),  //  Provide HttpClient globally
    provideRouter(routes),
    provideAnimations(), // ✅ Fix for animation error
    provideHttpClient(withInterceptorsFromDi()),
    ...(appConfig.providers || []),
  ],
}).catch((err) => console.error(err));

