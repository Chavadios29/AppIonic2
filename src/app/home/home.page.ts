import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router'; 
import { AuthService } from 'src/services/auth.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, RouterModule],
})
export class HomePage {
  welcomeMessage: string = 'Bienvenido'; // Mensaje de bienvenida

  constructor(private authService: AuthService, private router: Router) {}

  // Método para cerrar sesión si el usuario lo desea
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']); 
  }

  // Método para eliminar la cuenta del usuario
  async eliminarUsuario() {
    const password = prompt("Por favor, ingresa tu contraseña para confirmar la eliminación de tu cuenta.");

    if (password) {
      const confirm = window.confirm("¿Estás seguro de que deseas eliminar tu cuenta? Esta acción es irreversible.");

      if (confirm) {
        try {
          await this.authService.eliminarCuenta(password); // Pasar el password al método
          alert("Cuenta eliminada con éxito.");
          this.router.navigate(['/login']); // Redirigir al login después de eliminar la cuenta
        } catch (error) {
          console.error("Error al eliminar la cuenta:", error);
          alert("Ocurrió un error al eliminar la cuenta.");
        }
      }
    } else {
      alert("Se necesita tu contraseña para proceder con la eliminación de la cuenta.");
    }
  }
}
