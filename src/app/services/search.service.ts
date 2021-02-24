import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  search(terms: any): any {
    return terms.pipe(debounceTime(200))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((term: any) => this.searchEntries(term)));
  }


  searchEntries(term: any): any {
    return this.http
      .get('//swapi.dev/api/people/?search=' + term);
  }
}
