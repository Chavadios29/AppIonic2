import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPLPage } from './ppl.page';

const routes: Routes = [
  {
    path: '',
    component: PPLPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPLPageRoutingModule {}
