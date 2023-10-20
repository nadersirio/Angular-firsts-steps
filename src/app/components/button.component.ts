import { Component, Input } from "@angular/core";

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styles: ['width: 30px; border: 10px; border-radius: 60px'],
})
export class ButtonComponent {
  @Input() label!: string;
  buttonText1: string = 'Clique aqui!';
  buttonText2: string[] = ['Passe o mouse aqui!', 'Sair', 'Enviar'];
  buttonText3: number = 100;
  buttonText4 = {
    label: 'string em objeto!',
  }

  getAlert() {
    alert('ola!');
  }

  getAlertThis() {
    alert(this.label);
  }

  getAlertNumber(num: number) {
    alert(num)
  }

}
