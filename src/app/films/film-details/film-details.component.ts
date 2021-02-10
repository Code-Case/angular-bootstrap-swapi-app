import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IActor } from 'src/app/interfaces/Actor';
import { Router } from '@angular/router';
import { IFilm } from 'src/app/interfaces/Film';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.scss']
})
export class FilmDetailsComponent implements OnInit {
  film: any;
  name: IActor;
  NameList = new Array();



  constructor(private router: Router, private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {


    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get<IFilm>(`https://swapi.dev/api/films/${id}/`).subscribe(res => {
      this.film = res;
      this.film.characters.map((url: string) => {
        this.http.get<IActor>(url).subscribe(ress => {
          this.name = ress;
          this.NameList.push(this.name);
        });
      });

    });

  }




  openDetails(a: any): any {
    const split = a.url.split('/');
    const actorId = split[split.length - 2];
    this.router.navigateByUrl(`/actors-details/${actorId}`);
  }


}
