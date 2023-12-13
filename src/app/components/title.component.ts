import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-title',
  template: '<h1>OnInit {{ palavra }}</h1>',
  styles: ['h2{color: yellow}']
})

export class TitleComponent implements OnInit {

  palavra:string = 'Teste'

  constructor() { }
  ngOnInit(): void {
    this.palavra = `${this.palavra} Iniciado!`
  }
}

// Este componente está utilizando o OnInit, serve para executar alguma função assim que o componente "nasce" (for chamado). No caso, ele atualiza a váriavel 'palavra' para uma nova informação.