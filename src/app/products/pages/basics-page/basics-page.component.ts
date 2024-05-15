import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameUpper = 'nombre'
  public nameLower = 'nombre'
  public nameTitle = 'nombre y apellidos'
  public customDate = new Date();
}
