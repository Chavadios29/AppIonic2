import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pecho',
  templateUrl: './pecho.page.html',
  styleUrls: ['./pecho.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // Asegurar que los módulos correctos estén importados
})
export class PechoPage implements OnInit {

  ejercicios = [
    { nombre: 'Press de Banca', descripcion: 'Ejercicio clave para desarrollar fuerza y masa en el pecho.' },
    { nombre: 'Aperturas con Mancuernas', descripcion: 'Aísla el pectoral y mejora la amplitud del movimiento.' },
    { nombre: 'Fondos en Paralelas', descripcion: 'Trabaja pecho inferior y tríceps.' },
    { nombre: 'Press Inclinado', descripcion: 'Enfocado en la parte superior del pecho.' },
    { nombre: 'Press Declinado', descripcion: 'Aumenta el enfoque en el pectoral inferior.' },
    { nombre: 'Crossover en Poleas', descripcion: 'Mejora la definición y el aislamiento muscular.' },
    { nombre: 'Flexiones de Pecho', descripcion: 'Ejercicio clásico con variaciones para más dificultad.' },
    { nombre: 'Pullover con Barra', descripcion: 'Trabaja la expansión torácica y los pectorales.' },
  ];
  constructor() { }
  verDetalles(ejercicio: any) {
    console.log('Detalles del ejercicio:', ejercicio);
  }
  ngOnInit() {
  }
}
