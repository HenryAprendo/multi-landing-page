import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { loopsLinks } from '../../../data/links-loopStudios';

@Component({
  selector: 'app-loop-studios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loop-studios.component.html',
  styles: [
  ]
})
export class LoopStudiosComponent {

  links = loopsLinks.slice();

}
