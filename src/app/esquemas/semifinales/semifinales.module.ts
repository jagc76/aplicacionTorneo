import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SemifinalesPageRoutingModule } from './semifinales-routing.module';

import { SemifinalesPage } from './semifinales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SemifinalesPageRoutingModule
  ],
  declarations: [SemifinalesPage]
})
export class SemifinalesPageModule {}
