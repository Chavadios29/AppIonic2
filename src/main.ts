import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from 'src/app/app.routes';
import { importProvidersFrom, isDevMode } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { provideServiceWorker } from '@angular/service-worker';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(IonicModule.forRoot()), provideServiceWorker('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerWhenStable:30000'
          }),  // Corrige el error de configuración de Ionic
  ],
}).catch(err => console.error(err));
