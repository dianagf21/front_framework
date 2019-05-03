import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultarRegistroComponent } from './componentes/consultar-registro/consultar-registro.component';
import {Routes, RouterModule} from '@angular/router'

import { TabsModule } from 'ngx-bootstrap/tabs';


const routes: Routes = [
  {
    path: '',
    component: ConsultarRegistroComponent,
    data: {
      title: 'Consultar registro'
    }
  }
];


@NgModule({
  declarations: [ConsultarRegistroComponent],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes),
    TabsModule
  ],
  exports: [
      RouterModule
  ]
})
export class ConsultarRegistroModule { }
