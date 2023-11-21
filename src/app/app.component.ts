import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private router = inject(Router);

  private routeList = ['loopStudios','insure'];

  private length = this.routeList.length-1;

  private position = signal(0);

  nextRoute(){
    if(this.position() >= 0 && this.position() < this.length){
      this.position.update(position => position + 1);
      this.navigateTo();
    }
    else {
      this.position.set(0)
      this.navigateTo();
    }
  }

  previousRoute(){
    this.position.update(position => position - 1);
    if(this.position() < 0){
      this.navigateTo(this.length)
      this.position.set(this.length)
    } else {
      this.navigateTo();
    }
  }

  private navigateTo(position = this.position()){
    this.router.navigate([this.routeList[position]]);
  }

}
