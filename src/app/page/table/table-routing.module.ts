import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexTableComponent } from './complex-table/complex-table.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

const routes: Routes = [
  {
    path: 'complex',
    component: ComplexTableComponent,
  },
  {
    path: 'simple',
    component: SimpleTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableRoutingModule { }
