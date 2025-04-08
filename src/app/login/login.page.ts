import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      alert('Login exitoso');
      this.router.navigate(['/home']);
    } catch (error: unknown) {
      let errorMessage = 'Ocurrió un error, por favor intente nuevamente.';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage);
    }
  }

  irARegistro() {
    this.router.navigate(['/register']);
  }
}
