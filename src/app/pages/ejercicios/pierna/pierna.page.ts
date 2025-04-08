import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-pierna',
  templateUrl: './pierna.page.html',
  styleUrls: ['./pierna.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule], // Asegurar que los módulos correctos estén importados
})
export class PiernaPage implements OnInit {

  ejercicios = [
    { nombre: 'Sentadillas', descripcion: 'Ejercicio compuesto para cuádriceps, glúteos y core.' },
    { nombre: 'Prensa de Piernas', descripcion: 'Ejercicio en máquina que permite trabajar con más carga.' },
    { nombre: 'Zancadas', descripcion: 'Desarrollo unilateral de fuerza y estabilidad en las piernas.' },
    { nombre: 'Peso Muerto Rumano', descripcion: 'Enfocado en isquiotibiales y glúteos.' },
    { nombre: 'Elevación de Talones', descripcion: 'Fortalece los músculos de la pantorrilla.' },
    { nombre: 'Curl de Pierna en Máquina', descripcion: 'Aislamiento de los isquiotibiales.' },
    { nombre: 'Extensiones de Pierna', descripcion: 'Aislamiento para el desarrollo del cuádriceps.' },
    { nombre: 'Hip Thrust', descripcion: 'Ejercicio clave para el desarrollo de los glúteos.' },
  ];
  constructor() { }
  verDetalles(ejercicio: any) {
    console.log('Detalles del ejercicio:', ejercicio);
  }
  ngOnInit() {
  }
}
