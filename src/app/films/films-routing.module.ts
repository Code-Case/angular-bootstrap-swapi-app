import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListResolverService } from '../resolver/films-list-resolver.service';

const routes: Routes = [
  {
    path: 'film-list',
    component: FilmListComponent,
    resolve: {
      films: FilmsListResolverService
    }
  },
  {
    path: 'film-details/:id',
    component: FilmDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule { }
