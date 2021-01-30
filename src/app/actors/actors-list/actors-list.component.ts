import { Component, OnInit, Input } from '@angular/core';
import { IActor } from '../../interfaces/Actor';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-actors',
  templateUrl: './actors-list.component.html',
  styleUrls: ['./actors-list.component.scss']
})
export class ActorsListComponent implements OnInit {

  @Input() actors: IActor[];

  constructor(private router: Router, private route: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.actors = this.route.snapshot.data[`actors`];
  }

  openDetails(a: any): any {
    const split = a.url.split('/');
    const actorId = split[split.length - 2];
    this.router.navigateByUrl(`/actors-details/${actorId}`);
  }

}
