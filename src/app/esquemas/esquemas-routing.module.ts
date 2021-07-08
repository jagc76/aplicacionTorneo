import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EsquemasPage } from './esquemas.page';

const routes: Routes = [
  {
    path: '',
    component: EsquemasPage
  },
  {
    path: 'fase-grupos',
    loadChildren: () => import('./fase-grupos/fase-grupos.module').then( m => m.FaseGruposPageModule)
  },
  {
    path: 'final',
    loadChildren: () => import('./final/final.module').then( m => m.FinalPageModule)
  },
  {
    path: 'octavos',
    loadChildren: () => import('./octavos/octavos.module').then( m => m.OctavosPageModule)
  },
  {
    path: 'cuartos',
    loadChildren: () => import('./cuartos/cuartos.module').then( m => m.CuartosPageModule)
  },
  {
    path: 'semifinales',
    loadChildren: () => import('./semifinales/semifinales.module').then( m => m.SemifinalesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EsquemasPageRoutingModule {}
