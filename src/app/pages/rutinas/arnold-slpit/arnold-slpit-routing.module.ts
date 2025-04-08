import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArnoldSlpitPage } from './arnold-slpit.page';

const routes: Routes = [
  {
    path: '',
    component: ArnoldSlpitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArnoldSlpitPageRoutingModule {}
