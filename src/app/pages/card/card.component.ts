import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  products:string[] = []
  menuType:string = ""
  options:string[] = ['user', 'admin', 'superUser']
  placeholder:string = "Insira um item a lista!"
  value:string = "''"
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
    this.products.push(this.value)
  }
  remove(){
    this.products.pop()
  }
  checkIndex(index: number){
    alert(index);
  }
}
