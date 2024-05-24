import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {


  isUpperCase: boolean = false;
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman', canFly: true, color: Color.blue
    },
    {
      name: 'Batman', canFly: false, color: Color.black
    },
    {
      name: 'Flash', canFly: false, color: Color.red
    },
    {
      name: 'Green Lantern', canFly: true, color: Color.green
    },
  ];

  toggleUpperCase(){
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder(value: keyof Hero){
    this.orderBy = value;
  }
}
