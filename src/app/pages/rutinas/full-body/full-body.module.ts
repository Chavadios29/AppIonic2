import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FullBodyPageRoutingModule } from './full-body-routing.module';

import { FullBodyPage } from './full-body.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullBodyPageRoutingModule
  ],
  declarations: [FullBodyPage]
})
export class FullBodyPageModule {}
