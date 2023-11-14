import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { cards } from '../../../data/card-different';
import { links } from '../../../data/links-insure';

@Component({
  selector: 'app-insure',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './insure.component.html',
  styles: [
  ]
})
export class InsureComponent {

  cards = cards.slice();

  links = links.slice();

}
