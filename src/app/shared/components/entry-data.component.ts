import { Component } from "@angular/core";

@Component({
  selector: 'entry-data-component',
  templateUrl: './entry-data.component.html',
  styles: ['p {color: red}'],
})

export class EntryDataComponent {
  placeholderEmail:string= "Insira seu Email:";
  placeholderPassword:string = "Insira sua senha:";
  valueEmail:string = "";
  valuePassword: string = "";
  color:string = "green";
}