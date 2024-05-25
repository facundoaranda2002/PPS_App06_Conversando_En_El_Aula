import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"fir-hostingutn-3e7da","appId":"1:728431990795:web:5e826ae5710c9bf0e30f0e","storageBucket":"fir-hostingutn-3e7da.appspot.com","apiKey":"AIzaSyAv-J6JcTLXEGy_j8XcEK5BQ3Wn2jXNZX8","authDomain":"fir-hostingutn-3e7da.firebaseapp.com","messagingSenderId":"728431990795"}))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
});
