import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./ui/navbar/navbar.component";
import { DarkmodeService } from './service/darkmode.service';
import { ContentComponent } from "./ui/content/content.component";
import { FooterComponent } from "./ui/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContentComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Basit Jamil';
  darkModeService: DarkmodeService = inject(DarkmodeService)
}
