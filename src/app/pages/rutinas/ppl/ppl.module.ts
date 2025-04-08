import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPLPageRoutingModule } from './ppl-routing.module';

import { PPLPage } from './ppl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPLPageRoutingModule
  ],
  declarations: [PPLPage]
})
export class PPLPageModule {}
