import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class ModalComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, private formBuilder: FormBuilder) {

  }

  profileForm: FormGroup;

  ngOnInit(): void {

    this.profileForm = this.formBuilder.group({
      firstName: [null, Validators.required],
      birthDay: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  open(content: any) {
    this.modalService.open(content, { centered: true, windowClass: 'modal-rounded' });
  }

  onClick() {
    console.log("Submit button was clicked!");
  }

}
