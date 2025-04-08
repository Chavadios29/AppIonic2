import { Routes } from '@angular/router';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';
import { CatalogoPage } from './pages/catalogo/catalogo.page';
import { BrazoPage } from './pages/ejercicios/brazo/brazo.page';
import { PechoPage } from './pages/ejercicios/pecho/pecho.page';
import { EspaldaPage } from './pages/ejercicios/espalda/espalda.page';
import { PiernaPage } from './pages/ejercicios/pierna/pierna.page';
import { RutinasPage } from './pages/rutinas/rutinas.page';
import { PPLPage } from './pages/Rutinas/ppl/ppl.page';
import { ArnoldSlpitPage } from './pages/Rutinas/arnold-slpit/arnold-slpit.page';
import { FullBodyPage } from './pages/Rutinas/full-body/full-body.page';
import { ProgresoPage } from './pages/progreso/progreso.page';
import { GoogleFitPage } from './pages/google-fit/google-fit.page';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'home', component: HomePage },
  {path:'catalogo', component: CatalogoPage},
  ///Ejercicios//
  {path:'brazo', component:BrazoPage},
  {path:'pecho', component:PechoPage},
  {path:'espalda', component:EspaldaPage},
  {path:'hombro', component:HomePage},
  {path:'pierna', component:PiernaPage},

  ///Rutinas
  {path: 'rutinas', component:RutinasPage},
  {path: 'ppl', component:PPLPage},
  {path:'arnoldSplit', component: ArnoldSlpitPage},
  {path:'fullbody',component:FullBodyPage},
  ///Guardar Porgeso
  {path: 'progreso', component:ProgresoPage},

  ////My fit
  {path: 'google', component:GoogleFitPage}
  
];
