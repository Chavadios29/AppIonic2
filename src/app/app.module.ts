import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';  // Asegura que IonicModule esté importado
import { AngularFireModule } from '@angular/fire/compat';  // Firebase para Angular
import { firebaseConfig } from '../services/firebase-config';  // Importa correctamente la config de Firebase

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Agregar IonicModule
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Inicializar Firebase
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
