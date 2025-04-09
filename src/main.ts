import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideServiceWorker } from '@angular/service-worker';

// Import Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Tu config de firebase
import { firebaseConfig } from './services/firebase-config';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(IonicModule.forRoot()),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),

    // Aquí inyectas Firebase Standalone
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ],
}).catch(err => console.error(err));
