import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OctavosPageRoutingModule } from './octavos-routing.module';

import { OctavosPage } from './octavos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OctavosPageRoutingModule
  ],
  declarations: [OctavosPage]
})
export class OctavosPageModule {}
