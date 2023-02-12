import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';



const routes: Routes = [
  {
  path: 'auth', loadChildren:()=>import('./auth/auth.module').then(ndl=>ndl.AuthModule)
  },
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'items', component:ItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
