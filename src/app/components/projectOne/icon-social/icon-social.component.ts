import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-icon-social',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-social.component.html',
  styles: [
  ]
})
export class IconSocialComponent {

  @Input('iconName') name = '';

}
