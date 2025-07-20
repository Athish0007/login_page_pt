import { Routes } from '@angular/router';
import { Loginpage } from './pages/loginpage/loginpage';
import { Home } from './pages/home/home';

export const routes: Routes = [
  { path: '', component: Loginpage },
  { path: 'home', component: Home },
];
