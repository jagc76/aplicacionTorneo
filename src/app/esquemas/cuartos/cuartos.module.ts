import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuartosPageRoutingModule } from './cuartos-routing.module';

import { CuartosPage } from './cuartos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuartosPageRoutingModule
  ],
  declarations: [CuartosPage]
})
export class CuartosPageModule {}
