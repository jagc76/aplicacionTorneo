import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminacionDirectaPageRoutingModule } from './eliminacion-directa-routing.module';

import { EliminacionDirectaPage } from './eliminacion-directa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminacionDirectaPageRoutingModule
  ],
  declarations: [EliminacionDirectaPage]
})
export class EliminacionDirectaPageModule {}
