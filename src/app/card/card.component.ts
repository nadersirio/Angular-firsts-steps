import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  products:string[] = []
  placeholder:string = "Insira um item a lista!"
  constructor() {
    this.products = [
      "mouse",
      "teclado",
      "monitor",
      "headset"
    ]
  }
  ngOnChanges(): void {
    this.placeholder = ""
  }
  ngOnInit(): void {}
  adicionar(){
    this.products.push(this.placeholder)
  }
  remove(){
    this.products.pop()
  }
}
