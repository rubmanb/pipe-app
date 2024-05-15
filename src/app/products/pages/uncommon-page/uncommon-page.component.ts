import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  //i18nSelect pipe
  public name: string = 'Rubén';
  public gender: 'hombre'|'mujer' = 'hombre';
  public invitationMap = {
    'hombre': 'invitarlo',
    'mujer': 'invitarla'
  }

  changeClient() {
    this.name = 'Lily';
    this.gender = 'mujer'
  }

  //i18nPlural pipe
  public clientes: string[] = ['Rubén', 'Lily', 'Fernando', 'Román', 'Maria', 'Carla', 'Juan Carlos'];

  RemoveCustomer() {
    this.clientes.pop()
  }
}
