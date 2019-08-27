import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { ComplexTableComponent } from './complex-table/complex-table.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [ComplexTableComponent, SimpleTableComponent],
  imports: [
    CommonModule,
    TableRoutingModule,
    MaterialModule
  ]
})
export class TableModule { }
