import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuartosPage } from './cuartos.page';

const routes: Routes = [
  {
    path: '',
    component: CuartosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuartosPageRoutingModule {}
