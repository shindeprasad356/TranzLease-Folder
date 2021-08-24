import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import { SearchresultComponent } from './search/search.component';

const routes: Routes = [
  //{
  //  path: '',
  //  redirectTo: 'products',
  //  pathMatch: 'full',
  //},ngng
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'search',
    component: SearchresultComponent
  },
  {
    path: 'products',
    loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./customers/customer.module').then(m => m.CustomerModule)
  },
  { path: '**', component: AppComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
