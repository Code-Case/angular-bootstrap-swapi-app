import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { map } from 'rxjs/operators';

import { IActor } from '../interfaces/Actor';
import { IFilm } from '../interfaces/Film';


/**
 * SWAPI Data Service to get all from their API we need
 */

@Injectable()

export class DataService {

  /**
   * we need the http client here to get API data
   */

  constructor(private http: HttpClient) { }

  /**
   * Method to get all Actors
   */

  getActors(): Observable<IActor[]> {
    return this.http.get<IActor[]>('https://swapi.dev/api/people/')
      .pipe(map(data => {
        return data[`results`];
      }));
  }

  /**
   * Method to get Actor details by their ID
   */

  getActorDetails(id: string): Observable<IActor[]> {
    return this.http.get<IActor[]>(`https://swapi.dev/api/people/` + id + '/')
      .pipe(map(data => {
        return data[`results`];
      }));
  }

  /**
   * Method to search actor by name
   */

  searchActor(name: string): Observable<IActor[]> {
    return this.http.get<IActor[]>(`https://swapi.dev/api/people/?search=` + name + '/')
      .pipe(map(data => {
        return data[`results`];
      }));
  }


  /**
   * Method to get all Films
   */

  getFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>('https://swapi.dev/api/films/')
      .pipe(map(data => {
        return data[`results`];
      }));
  }

  /**
   * Method to get Actor details by their ID
   */

  getFilmDetails(id: string): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(`https://swapi.dev/api/films/` + id + '/')
      .pipe(map(data => {
        return data[`results`];
      }));
  }


}


