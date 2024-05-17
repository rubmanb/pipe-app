import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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
  public clientesMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1': 'Actualmente tenemos 1 cliente esperando',
    '=2': 'Actualmente tenemos 2 clientes esperando',
    'other': 'Actualmente tenemos # clientes esperando'
  }

  RemoveCustomer() {
    this.clientes.pop()
  }


  // key value pipe
  public person = {
    name: 'Rubén',
    city: 'Valencia'
  }

  //async pipe
  public myObserrvableTimer = interval(2000).pipe(
    tap( value => console.log("tap", value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve('Promesa activada');
   }, 3500);
  });
}
