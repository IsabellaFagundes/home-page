import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'pagina-principal',
        loadChildren: () => import('./pagina-principal/pagina-principal.module').then( m => m.PaginaPrincipalPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
      {
        path: 'adicionar',
        loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
      },
      {
        path: 'ajuda',
        loadChildren: () => import('./ajuda/ajuda.module').then( m => m.AjudaPageModule)
      },
    ]  
  },
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
