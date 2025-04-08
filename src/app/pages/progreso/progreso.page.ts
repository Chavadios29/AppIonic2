import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // Importa FormsModule

@Component({
  selector: 'app-progreso',
  templateUrl: './progreso.page.html',
  styleUrls: ['./progreso.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule, FormsModule],  // Agrega FormsModule aquí
})
export class ProgresoPage implements OnInit {
  progreso = {
    pressBanca: null,
    sentadilla: null,
    pesoMuerto: null,
    fecha: ''
  };

  // Método para guardar el progreso
  guardarProgreso() {
    console.log('Progreso guardado:', this.progreso);
    // Aquí podrías añadir la lógica para guardar el progreso en una base de datos o en un servicio.
  }

  // Validación del formulario
  isFormValid() {
    return this.progreso.pressBanca && this.progreso.sentadilla && this.progreso.pesoMuerto && this.progreso.fecha;
  }

  constructor() { }

  ngOnInit() {
  }
}
