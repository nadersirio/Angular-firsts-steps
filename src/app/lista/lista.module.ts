/* para criar esse modulo pelo terminal, foi utilizado o comando ng g m lista */
/* e para criar o component input, utilizei ng g c lista/input*/
/* e para criar o component list view, ng g c lista/list-view*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ListViewComponent } from './list-view/list-view.component';



@NgModule({
  declarations: [
    InputComponent,
    ListViewComponent
  ],
  exports: [
    InputComponent, /* é necessário exportar ele aqui para utilizar em outro lugar. */
    ListViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ListaModule { }
