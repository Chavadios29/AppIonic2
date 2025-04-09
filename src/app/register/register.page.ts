import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, FormsModule],
})
export class RegisterPage {

  nombreCompleto: string = '';
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  aceptoAvisoPrivacidad: boolean = false;
  mostrarErrorPasswords: boolean = false;

  constructor(private router: Router) {}

  // Función para validar si las contraseñas coinciden
  validarPasswords() {
    this.mostrarErrorPasswords = this.password !== this.confirmPassword;
  }

  // Función para registrar al usuario
  register() {
    if (!this.aceptoAvisoPrivacidad) {
      alert('Debes aceptar el aviso de privacidad para registrarte.');
      return;
    }

    if (this.mostrarErrorPasswords) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Aquí va tu lógica de registro (puedes agregar más lógica o hacer un llamado a un servicio)
    console.log('Usuario registrado:', this.nombreCompleto, this.username, this.email);
    // Redirige a una página, por ejemplo, a la página principal
    this.router.navigate(['/home']);
  }

  // Función para redirigir al usuario al Aviso de Privacidad
  verAvisoPrivacidad() {
    this.router.navigate(['/aviso']);
  }
}
