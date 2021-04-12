import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadorasPage } from './jugadoras.page';

const routes: Routes = [
  {
    path: '',
    component: JugadorasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadorasPageRoutingModule {}
