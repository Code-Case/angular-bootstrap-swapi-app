import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { IFilm } from '../interfaces/Film';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class FilmsListResolverService implements Resolve<IFilm[]>{

  constructor(private dataservice: DataService) { }

  resolve(): Observable<IFilm[]> | Promise<IFilm[]> | IFilm[] {
    return this.dataservice.getFilms();
  }
}
