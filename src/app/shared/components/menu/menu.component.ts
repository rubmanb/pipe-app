import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BasicsPageComponent } from '../../../products/pages/basics-page/basics-page.component';
import { NumbersPageComponent } from '../../../products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from '../../../products/pages/uncommon-page/uncommon-page.component';
import { Router } from '@angular/router';



@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    this.menuItems = [
      {label: 'Pipes de Angular',
      icon: 'pi pi-desktop',
      routerLinkActiveOptions: true,
      items: [
        {
          label: 'Básicos',
          icon: 'pi pi-align-left',
          // routerLink: '/',
          command: () => this.router.navigate([''])},
        {
          label: 'Números',
          icon: 'pi pi-dollar',
          // routerLink: 'numbers',
          command: () => this.router.navigate(['numbers'])},
        {
          label: 'No comunes',
          icon: 'pi pi-globe',
          // routerLink: 'uncommon',
          command: () => this.router.navigate(['uncommon'])},
       ]
      },
      {
        label: 'Pipes personalizados', icon: 'pi pi-cog',
        items: [
          {label: 'otro elemento', icon: 'pi pi-cog'}
        ]
      }
    ];
  }
}
