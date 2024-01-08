import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { environment } from '../environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideToastr(),
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      provideFirebaseApp(() => initializeApp(environment.firebase))
    ),
    // importProvidersFrom(provideAuth(() => getAuth())),
    // importProvidersFrom(provideAnalytics(() => getAnalytics())),
    ScreenTrackingService,
    UserTrackingService,
    // importProvidersFrom(
    //   provideAppCheck(() => {
    //     // TODO get a reCAPTCHA Enterprise here https://console.cloud.google.com/security/recaptcha?project=_
    //     const provider = new ReCaptchaEnterpriseProvider(
    //     );
    //     return initializeAppCheck(undefined, {
    //       provider,
    //       isTokenAutoRefreshEnabled: true,
    //     });
    //   })
    // ),
    importProvidersFrom(provideFirestore(() => getFirestore())),
    // importProvidersFrom(provideDatabase(() => getDatabase())),
    // importProvidersFrom(provideMessaging(() => getMessaging())),
    // importProvidersFrom(providePerformance(() => getPerformance())),
  ],
};
