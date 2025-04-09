import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { inject } from '@angular/core';

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],
})
export class ProgresoPage implements OnInit {

  progreso = {
    pressBanca: null,
    sentadilla: null,
    pesoMuerto: null,
    fecha: ''
  };

  firestore: Firestore = inject(Firestore);  // Inyección sin constructor

  ngOnInit() {
    const col = collection(this.firestore, 'progresos');
    collectionData(col).subscribe(data => {
      console.log('Datos de Firebase:', data);
    });
  }

  guardarProgreso() {
    const col = collection(this.firestore, 'progresos');
    addDoc(col, this.progreso)
      .then(() => console.log('Progreso guardado en Firebase'))
      .catch(err => console.error('Error:', err));
  }

  isFormValid() {
    return this.progreso.pressBanca && this.progreso.sentadilla && this.progreso.pesoMuerto && this.progreso.fecha;
  }
}
