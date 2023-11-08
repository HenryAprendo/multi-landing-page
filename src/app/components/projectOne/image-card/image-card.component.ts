import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Representa el contenido mediante ranuras(slot) multiples
 ** Una para las etiquetas source con img.
 ** La segunda para el figcation marcada con el selector css [subtitle]
 */

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="relative">
      <figure>
        <picture>
          <ng-content></ng-content>
        </picture>
        <ng-content select="[subtitle]" ></ng-content>
      </figure>
    </article>
  `,
  styles: [
  ]
})
export class ImageCardComponent {

}
