import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArnoldSlpitPageRoutingModule } from './arnold-slpit-routing.module';

import { ArnoldSlpitPage } from './arnold-slpit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArnoldSlpitPageRoutingModule
  ],
  declarations: [ArnoldSlpitPage]
})
export class ArnoldSlpitPageModule {}
