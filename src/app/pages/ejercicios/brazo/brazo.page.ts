import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.page.html',
  styleUrls: ['./brazo.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // Asegurar que los módulos correctos estén importados
})
export class BrazoPage implements OnInit {
    ejercicios = [
      { nombre: 'Curl de Bíceps', descripcion: 'Ejercicio clásico para fortalecer los bíceps.' },
      { nombre: 'Fondos en Paralelas', descripcion: 'Trabaja los tríceps y el pecho.' },
      { nombre: 'Press de Hombro', descripcion: 'Fortalece los deltoides y los tríceps.' },
      { nombre: 'Extensiones de Tríceps con Mancuerna', descripcion: 'Aísla los tríceps con un movimiento controlado.' },
      { nombre: 'Martillo con Mancuernas', descripcion: 'Trabaja el braquial y los bíceps con un agarre neutro.' },
      { nombre: 'Flexiones Diamante', descripcion: 'Flexiones con manos juntas para enfocar el trabajo en los tríceps.' },
      { nombre: 'Dominadas Supinas', descripcion: 'Ejercicio compuesto que fortalece los bíceps y la espalda.' },
      { nombre: 'Elevaciones Frontales', descripcion: 'Enfocadas en los deltoides frontales y la estabilidad del hombro.' },
    ];

  constructor() { }

  verDetalles(ejercicio: any) {
    console.log('Detalles del ejercicio:', ejercicio);
  }
  ngOnInit() { }
}
