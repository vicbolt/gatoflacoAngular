import { Component } from '@angular/core';

@Component({
  selector: 'app-menunav',
  templateUrl: './menunav.component.html',
  styleUrl: './menunav.component.scss'
})
export class MenunavComponent {
  menuOpen = false;

  toggleMenu() {
      this.menuOpen = !this.menuOpen;
  }
}
