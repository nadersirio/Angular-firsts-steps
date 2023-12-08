import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buttonLabel: string = 'Botões';
  isAliveCheckSample: boolean = true;
  SampleMessage: string = 'destruir';
  isAliveCheckEntryData: boolean = false;
  InputsMessage: string = 'criar componentes';

  checkSample(): void {
    this.isAliveCheckSample = !this.isAliveCheckSample;
    this.SampleMessage = this.isAliveCheckSample ? 'destruir' : 'recuperar';
  }

  inputCheckSample(): void {
    this.isAliveCheckEntryData = !this.isAliveCheckEntryData;
    this.InputsMessage = this.isAliveCheckEntryData ? 'destruir componentes' : 'criar componentes';
  }
}

