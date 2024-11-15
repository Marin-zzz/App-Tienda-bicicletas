import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarGuiasPage } from './listar-guias.page';

const routes: Routes = [
  {
    path: '',
    component: ListarGuiasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarGuiasPageRoutingModule {}
