import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoogleFitPageRoutingModule } from './google-fit-routing.module';

import { GoogleFitPage } from './google-fit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GoogleFitPageRoutingModule
  ],
  declarations: [GoogleFitPage]
})
export class GoogleFitPageModule {}
