import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaseGruposPage } from './fase-grupos.page';

const routes: Routes = [
  {
    path: '',
    component: FaseGruposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaseGruposPageRoutingModule {}
