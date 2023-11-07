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
  templateUrl: './image-card.component.html',
  styles: [
  ]
})
export class ImageCardComponent {

}
