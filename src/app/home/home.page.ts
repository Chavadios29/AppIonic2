import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule
import { AuthService } from 'src/services/auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule,HomePage], // Añadir RouterModule aquí
})
export class HomePage {
  welcomeMessage: string = 'Bienvenido'; // Mensaje de bienvenida

  constructor(private authService: AuthService, private router: Router) {}

  // Método para cerrar sesión si el usuario lo desea
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }
}
