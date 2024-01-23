import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent {
  estilo:string = "disable";
  corDeFundo:string = "purple";
  corDaFonte:string = "green";
  item:string = "";
  lista:string[] = []
  isEnableBlock:boolean = true

  adicionarLista(){
    this.lista.push(this.item)
  }

  trocar() {
    this.estilo = (this.estilo === "disable") ? "enable" : "disable";
  }
}
