import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl = 'https://swapi.dev/api/people/';
  queryUrl = '?search=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>): any {
    return terms.pipe(debounceTime(200))
      .pipe(distinctUntilChanged())
      .pipe(switchMap(term => this.searchEntries(term)));
  }

  searchEntries(term: any): any {
    return this.http
      .get(this.baseUrl + this.queryUrl + term);
  }
}
