import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EsquemasPageRoutingModule } from './esquemas-routing.module';

import { EsquemasPage } from './esquemas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EsquemasPageRoutingModule
  ],
  declarations: [EsquemasPage]
})
export class EsquemasPageModule {}
