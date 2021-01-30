import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmDetailsComponent } from './film-details/film-details.component';

import { DataService } from '../services/data.service';


@NgModule({
  declarations: [FilmListComponent, FilmDetailsComponent],
  imports: [
    CommonModule,
    FilmsRoutingModule
  ],
  providers: [DataService]

})
export class FilmsModule { }
