import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsListComponent } from './actors-list/actors-list.component';
import { ActorsDetailsComponent } from './actors-details/actors-details.component';
import { ActorsRoutingModule } from './actors-routing.module';
import { ModalComponent } from '../components/modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';




@NgModule({
  declarations: [ActorsListComponent, ActorsDetailsComponent, ModalComponent],
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
