import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-espalda',
  templateUrl: './espalda.page.html',
  styleUrls: ['./espalda.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // Asegurar que los módulos correctos estén importados
})
export class EspaldaPage implements OnInit {
  ejercicios = [
    { nombre: 'Dominadas', descripcion: 'Ejercicio fundamental para la fuerza y desarrollo de la espalda.' },
    { nombre: 'Remo con Barra', descripcion: 'Ejercicio compuesto que trabaja dorsales, trapecios y deltoides posteriores.' },
    { nombre: 'Jalón al Pecho', descripcion: 'Ejercicio en máquina que enfoca en los dorsales anchos.' },
    { nombre: 'Remo con Mancuerna', descripcion: 'Aisla un lado de la espalda para un desarrollo equilibrado.' },
    { nombre: 'Peso Muerto', descripcion: 'Ejercicio básico que trabaja toda la cadena posterior.' },
    { nombre: 'Face Pulls', descripcion: 'Trabaja los deltoides posteriores y mejora la postura.' },
    { nombre: 'Encogimientos con Barra', descripcion: 'Ejercicio específico para el desarrollo del trapecio.' },
    { nombre: 'Pull-over con Mancuerna', descripcion: 'Trabaja dorsales y expande la caja torácica.' },
  ];

  constructor() { }
  verDetalles(ejercicio: any) {
    console.log('Detalles del ejercicio:', ejercicio);
  }
  ngOnInit() {
  }

}
