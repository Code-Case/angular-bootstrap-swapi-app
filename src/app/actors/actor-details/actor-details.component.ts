import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { IFilm } from 'src/app/interfaces/Film';
import { Router } from '@angular/router';
import { IActor } from 'src/app/interfaces/Actor';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'actors-details',
  templateUrl: './actor-details.component.html',
  styleUrls: ['./actor-details.component.scss']
})



export class ActorDetailsComponent implements OnInit {
  actor: any;
  planet: any;
  NameList = new Array();
  name: any;


  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient, private location: Location, private router: Router) { }

  ngOnInit(): void {

    /*
    * Method to get Actor Json by ID
    */


    const id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get<IActor>(`//swapi.dev/api/people/${id}/`).subscribe(res => {
      this.actor = res;
      this.actor.films.map((url: string) => {
        this.http.get<IFilm>(url).subscribe(rese => {
          this.name = rese;
          this.NameList.push(this.name);
        });
      });
    });



    /*
* Method to get Actors planet by ID
*/

    this.http.get(`https://swapi.dev/api/planets/${id}/`).subscribe(res => {
      this.planet = res;
    });

  }

  openDetails(f: any): any {
    const split = f.url.split('/');
    const filmId = split[split.length - 2];
    this.router.navigateByUrl(`/film-details/${filmId}`);
  }


  goBack(): any {
    this.location.back();
  }


}
