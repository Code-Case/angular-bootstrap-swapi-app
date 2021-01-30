import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IActor } from '../interfaces/Actor';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ActorResolverService implements Resolve<IActor[]>{

  constructor(private dataservice: DataService) { }

  resolve(): Observable<IActor[]> | Promise<IActor[]> | IActor[] {
    return this.dataservice.getActors();
  }
}
