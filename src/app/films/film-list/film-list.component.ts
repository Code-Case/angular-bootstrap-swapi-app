import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFilm } from 'src/app/interfaces/Film';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  @Input() films: IFilm[];

  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.films = this.route.snapshot.data[`films`];
  }

  openDetails(f: any): any {
    const split = f.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`/film-details/${filmId}`);
  }

}
