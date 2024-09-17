import { Component, inject } from '@angular/core';
import { DarkmodeService } from '../../service/darkmode.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  darkModeService : DarkmodeService = inject(DarkmodeService);
  toggleDarkMode(){
    this.darkModeService.toggleDarkMode()
  }
}
