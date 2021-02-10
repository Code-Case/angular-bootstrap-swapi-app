import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorResolverService } from '../resolver/actors-list-resolver.service';
import { ActorsDetailsComponent } from './actors-details/actors-details.component';

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
    component: ActorsDetailsComponent,

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
