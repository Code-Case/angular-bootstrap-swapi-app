import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'actors',
    loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule)
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
  { path: '**', component: PagenotfoundComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
