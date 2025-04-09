import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aviso-de-privacidad',
  templateUrl: './aviso-de-privacidad.page.html',
  styleUrls: ['./aviso-de-privacidad.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class AvisoDePrivacidadPage {

  constructor(private router: Router) {}

  volver() {
    this.router.navigate(['/register']); // te regresa al registro
  }
}
