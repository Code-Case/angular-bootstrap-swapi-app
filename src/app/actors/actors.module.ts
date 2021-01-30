import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorDetailsComponent } from './actor-details/actor-details.component';
import { ActorsRoutingModule } from './actors-routing.module';
import { ModalComponent } from '../components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';




@NgModule({
  declarations: [ActorsListComponent, ActorDetailsComponent, ModalComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ModalComponent
  ],
  entryComponents: [],
  bootstrap: [ModalComponent],
  providers: [DataService]
})
export class ActorsModule { }
