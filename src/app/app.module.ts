import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';  // Asegura que IonicModule esté importado
import { AngularFireModule } from '@angular/fire/compat';  // Firebase para Angular
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';  // Importa AngularFirestoreModule
import { firebaseConfig } from '../services/firebase-config';  // Importa correctamente la config de Firebase

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),  // Agregar IonicModule
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), // Inicializar Firebase
    AngularFirestoreModule,  // Asegúrate de que AngularFirestoreModule esté aquí
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
