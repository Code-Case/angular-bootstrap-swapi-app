import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorResolverService } from '../resolver/actors-list-resolver.service';

const routes: Routes = [
  {
    path: 'actors-list',
    component: ActorsListComponent,
    resolve: {
      actors: ActorResolverService
    }
  },
  {
    path: 'actors-details/:id',
    component: ActorDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
