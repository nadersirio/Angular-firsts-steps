import { Component } from "@angular/core";

@Component({
  selector: 'entry-data-component',
  templateUrl: './entry-data.component.html',
  styles: ['p {color: red}'],
})

export class EntryDataComponent {
  placeholder:string = "Insira seu Email:";
  placepass:string = "Insira sua senha:";
  color:string = "green";
}