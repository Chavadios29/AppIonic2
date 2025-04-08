import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PechoPageRoutingModule } from './pecho-routing.module';

import { PechoPage } from './pecho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PechoPageRoutingModule
  ],
  declarations: [PechoPage]
})
export class PechoPageModule {}
