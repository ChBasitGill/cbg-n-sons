import { Component, inject } from '@angular/core';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
  userProfile = inject(ProfileService);
}
