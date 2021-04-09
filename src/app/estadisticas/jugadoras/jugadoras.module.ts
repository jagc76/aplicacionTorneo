import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadorasPageRoutingModule } from './jugadoras-routing.module';

import { JugadorasPage } from './jugadoras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadorasPageRoutingModule
  ],
  declarations: [JugadorasPage]
})
export class JugadorasPageModule {}
