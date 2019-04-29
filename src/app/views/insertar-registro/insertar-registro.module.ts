import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertarRegistroComponent } from './componentes/insertar-registro/insertar-registro.component';
import {Routes, RouterModule} from '@angular/router'

import { TabsModule } from 'ngx-bootstrap/tabs';





const routes: Routes = [
    {
      path: '',
      component: InsertarRegistroComponent,
      data: {
        title: 'Insertar registro'
      }
    }
  ];



@NgModule({
  declarations: [InsertarRegistroComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    TabsModule
  ],
  exports: [
      RouterModule
  ]
})
export class InsertarRegistroModule { }
