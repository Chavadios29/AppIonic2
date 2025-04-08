import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule],  // Asegúrate de importar IonicModule aquí
})
export class CatalogoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
