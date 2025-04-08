import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class RegisterPage {
  nombreCompleto = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  mostrarErrorPasswords = false;

  constructor(private authService: AuthService, private router: Router) {}

  validarPasswords() {
    this.mostrarErrorPasswords = this.confirmPassword !== '' && this.password !== this.confirmPassword;
  }

  formValido(): boolean {
    return this.nombreCompleto !== '' && this.username !== '' &&
           this.email !== '' && this.password !== '' &&
           this.confirmPassword !== '' && !this.mostrarErrorPasswords;
  }

  async register() {
    if (this.mostrarErrorPasswords) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    try {
      // ✅ Llamamos correctamente a `register()` con los 4 parámetros
      await this.authService.register(this.email, this.password, this.username, this.nombreCompleto);
      alert('Registro exitoso. Redirigiendo al login...');
      this.router.navigate(['/login']);
    } catch (error: unknown) {
      let errorMessage = 'Ocurrió un error, por favor intente nuevamente.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }
  }

  irAPaginaLogin() {
    this.router.navigate(['/login']);
  }
}
