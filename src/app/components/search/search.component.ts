import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  results: Array<any>;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe((results: { results: any[]; }) => {
        this.results = results.results;
      });
  }

  ngOnInit(): void {
  }

}
