import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.cmpt.html',
  styleUrls: ['./navbar.cmpt.css'],
})
export class NavbarComponent {
  activeLink: string = '';

  onClick(e: any) {
    this.activeLink = e.target.textContent;
  }
}
