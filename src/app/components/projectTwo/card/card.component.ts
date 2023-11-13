import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardInsure } from 'src/app/data/card-different';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="flex flex-col items-center gap-y-3 text-center max-w-xs sm:items-start sm:text-left sm:gap-x-3">
      <img [src]="card.icon" [alt]="card.title">
      <h3 class="text-2xl font-DMserifDisplay">{{card.title}}</h3>
      <p class="text-sm text-dark-grayish-violet-ensure">{{card.description}}</p>
    </article>
  `,
  styles: [
  ]
})
export class CardComponent {

  @Input({required: true}) card!: CardInsure;

}
