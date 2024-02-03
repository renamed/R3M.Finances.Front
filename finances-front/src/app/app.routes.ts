import { Routes } from '@angular/router';

// pages
import { HomeComponent } from './modules/pages/home/home.component';

// components
import { DashboardComponent } from './modules/components/dashboard/dashboard.component';
import { CategoriesComponent } from './modules/components/categories/categories.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'category', component: CategoriesComponent },
  { path: 'dashboard', component: DashboardComponent }
];
