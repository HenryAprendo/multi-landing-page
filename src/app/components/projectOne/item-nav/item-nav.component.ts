import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

type NavPosition = 'top' | 'bottom';

@Component({
  selector: 'app-item-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './item-nav.component.html',
  styles: [
  ]
})
export class ItemNavComponent {

  @Input('linkTitle') title = '';

  @Input() path = '';

  @Input() navPosition: NavPosition = 'top';

}
