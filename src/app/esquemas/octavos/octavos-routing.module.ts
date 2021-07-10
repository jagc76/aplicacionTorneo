import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OctavosPage } from './octavos.page';

const routes: Routes = [
  {
    path: '',
    component: OctavosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OctavosPageRoutingModule {}
