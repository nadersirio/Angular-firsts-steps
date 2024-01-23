import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListaModule } from './lista/lista.module';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/components/menu.component';
import { ButtonComponent } from './shared/components/button.component';
import { EntryDataComponent } from './shared/components/entry-data.component';
import { TitleComponent } from './shared/components/title.component';
import { CheckSampleComponent } from './pages/check-sample/check-sample.component';
import { CardComponent } from './pages/card/card.component';
import { CompAtributosComponent } from './pages/comp-atributos/comp-atributos.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
    CheckSampleComponent,
    CardComponent,
    CompAtributosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ListaModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
