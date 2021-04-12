import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminacionDirectaPage } from './eliminacion-directa.page';

const routes: Routes = [
  {
    path: '',
    component: EliminacionDirectaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminacionDirectaPageRoutingModule {}
