import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosFormComponent } from './produtos-form/produtos-form.component';

const routes: Routes = [
  { path:'produtos-list', component: ProdutosListComponent },
  { path:'produtos-form', component: ProdutosFormComponent },
  { path:'produtos-form/:id', component: ProdutosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
