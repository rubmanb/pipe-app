import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrl: './numbers-page.component.css'
})
export class NumbersPageComponent {

  public year = new Date().getFullYear();
  public totalSells: number = 41365123.141519;
  public percentNumber: number = 0.41564055;
}
