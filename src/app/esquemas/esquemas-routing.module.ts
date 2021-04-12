import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemasPage } from './esquemas.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemasPage
  },  {
    path: 'fase-grupos',
    loadChildren: () => import('./fase-grupos/fase-grupos.module').then( m => m.FaseGruposPageModule)
  },
  {
    path: 'eliminacion-directa',
    loadChildren: () => import('./eliminacion-directa/eliminacion-directa.module').then( m => m.EliminacionDirectaPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemasPageRoutingModule {}
