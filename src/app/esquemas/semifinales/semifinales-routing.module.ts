import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SemifinalesPage } from './semifinales.page';

const routes: Routes = [
  {
    path: '',
    component: SemifinalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SemifinalesPageRoutingModule {}
