import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemasPage } from './esquemas.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemasPageRoutingModule {}
