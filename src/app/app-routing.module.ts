// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';  // Importar HomePage
import { CatalogoPage } from './pages/catalogo/catalogo.page';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProgresoPage } from './pages/progreso/progreso.page';
import { RutinasPage } from './pages/rutinas/rutinas.page';
import { EspaldaPage } from './pages/ejercicios/espalda/espalda.page';
import { PechoPage } from './pages/ejercicios/pecho/pecho.page';
import { PiernaPage } from './pages/ejercicios/pierna/pierna.page';
import { BrazoPage } from './pages/ejercicios/brazo/brazo.page';
import { PPLPage } from './pages/Rutinas/ppl/ppl.page';
import { FullBodyPage } from './pages/Rutinas/full-body/full-body.page';
import { ArnoldSlpitPage } from './pages/Rutinas/arnold-slpit/arnold-slpit.page';
import { GoogleFitPage } from './pages/google-fit/google-fit.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage, // Asignamos HomePage a la ruta '/home'
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
  },
  {
    path: 'rutinas',
    component: RutinasPage
  },
  {
    path: 'progreso',
    component: ProgresoPage
  },
  {
    path: 'catalogo',
    component: CatalogoPage
  },
  {
    path: 'pecho',
     component: PechoPage
  },
  {
    path: 'espalda',
    component: EspaldaPage
  },
  {
    path: 'pierna',
    component: PiernaPage
  },
  {
    path: 'brazo',
    component: BrazoPage
  },
   ////////RUTINAS////////
  {
    path: 'rutinas',
    component: RutinasPage
  },
  {
    path: 'ppl',
    component: PPLPage
  },
  {
    path: 'fullbody',
    component: FullBodyPage
  },
  {
    path: 'arnoldSplit',
    component: ArnoldSlpitPage
  },
  // Otras rutas

  ///Progreso//// 
  {path:'Progreso',
    component:ProgresoPage
  },
  {
    path: 'google-fit',
    component:GoogleFitPage
  },
];


bootstrapApplication(CatalogoPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
  /////////////Ejercicio///////
bootstrapApplication(PechoPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(EspaldaPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(PiernaPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(BrazoPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});

////Rutinas////////////
bootstrapApplication(RutinasPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(PPLPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(FullBodyPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
bootstrapApplication(ArnoldSlpitPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});

/////Progreso
bootstrapApplication(ProgresoPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});
/////GoogleFit
bootstrapApplication(GoogleFitPage, {
  providers: [
    provideRouter(routes),  // Configura el enrutador aquí
    RouterModule
  ]
});

/////

export class AppRoutingModule {}
