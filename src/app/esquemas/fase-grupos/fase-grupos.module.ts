import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FaseGruposPageRoutingModule } from './fase-grupos-routing.module';

import { FaseGruposPage } from './fase-grupos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FaseGruposPageRoutingModule
  ],
  declarations: [FaseGruposPage]
})
export class FaseGruposPageModule {}
