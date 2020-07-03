import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'locais',
    pathMatch: 'full'
  },
  {
    path: 'autenticar',
    loadChildren: () => import('./autenticar/autenticar.module').then( m => m.AutenticarPageModule)
  },
  {
    path: 'locais',
    loadChildren: () => import('./locais/locais.module').then( m => m.LocaisPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
