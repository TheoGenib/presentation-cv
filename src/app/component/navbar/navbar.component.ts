import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { NavItemModel } from 'src/app/models/nav-item.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  navItems: NavItemModel[] = [];

  constructor(private router: Router){}

  ngOnInit(){
    this.navItems = this.getNavItems();
  }

//--------------
// GET NAV ITEMS
//--------------
  getNavItems(): NavItemModel[] {
    const navItems: NavItemModel[] = [
      { label: 'Acceuil', url:'home' },
      { label: 'Mon CV', url:'cv' },
      { label: 'Contact',url:'contact' },
    ];

    return navItems
  }

  isCurrentUrl(url: string): boolean {
    return this.router.url === `/${url}`;
  }

  navigateToUrl(url:string): void {
    this.router.navigate([`/${url}`]);
  }
}
