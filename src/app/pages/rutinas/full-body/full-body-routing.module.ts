import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullBodyPage } from './full-body.page';

const routes: Routes = [
  {
    path: '',
    component: FullBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullBodyPageRoutingModule {}
