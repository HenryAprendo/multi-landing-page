import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loopsLinks } from '../../../data/links-loopStudios';
import { IconSocialComponent } from '../icon-social/icon-social.component';
import { ItemNavComponent } from '../item-nav/item-nav.component';
import { ImageCardComponent } from '../image-card/image-card.component';

@Component({
  selector: 'app-loop-studios',
  standalone: true,
  imports: [CommonModule, IconSocialComponent, ItemNavComponent, ImageCardComponent],
  templateUrl: './loop-studios.component.html',
  styles: [
  ]
})
export class LoopStudiosComponent {

  links = loopsLinks.slice();

}
