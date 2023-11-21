import { Routes } from '@angular/router';
import { LoopStudiosComponent } from './components/projectOne/loop-studios/loop-studios.component';
import { InsureComponent } from './components/projectTwo/insure/insure.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loopStudios',
    pathMatch: 'full'
  },
  {
    path: 'loopStudios',
    component: LoopStudiosComponent
  },
  {
    path: 'insure',
    component: InsureComponent
  }
];
