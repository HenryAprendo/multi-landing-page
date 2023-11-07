import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loopsLinks } from '../../../data/links-loopStudios';
import { IconSocialComponent } from '../icon-social/icon-social.component';

@Component({
  selector: 'app-loop-studios',
  standalone: true,
  imports: [CommonModule, IconSocialComponent],
  templateUrl: './loop-studios.component.html',
  styles: [
  ]
})
export class LoopStudiosComponent {

  links = loopsLinks.slice();

}
