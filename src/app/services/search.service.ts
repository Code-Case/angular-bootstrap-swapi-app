import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl = 'https://swapi.dev/api/people/';
  queryUrl = '?search=';

  constructor(private http: HttpClient) { }

  search(terms: Observable<string>): any {
    return terms.debounceTime(200)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term: any): any {
    return this.http
      .get(this.baseUrl + this.queryUrl + term);
  }
}
