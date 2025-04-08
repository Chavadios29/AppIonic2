import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinasPage } from './rutinas.page';

const routes: Routes = [
  {
    path: '',
    component: RutinasPage
  },  {
    path: 'ppl',
    loadChildren: () => import('../Rutinas/ppl/ppl.module').then( m => m.PPLPageModule)
  },
  {
    path: 'arnold-slpit',
    loadChildren: () => import('../Rutinas/arnold-slpit/arnold-slpit.module').then( m => m.ArnoldSlpitPageModule)
  },
  {
    path: 'full-body',
    loadChildren: () => import('../Rutinas/full-body/full-body.module').then( m => m.FullBodyPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinasPageRoutingModule {}
