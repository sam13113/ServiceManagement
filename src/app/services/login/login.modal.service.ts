import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from 'src/app/common/sign-in/sign-in.component';

@Injectable()
export class LoginModalService {
  private isOpen = false;
  constructor(private modalService: NgbModal) {}

  public open(): NgbModalRef {
    if (this.isOpen) {
      return;
    }
    this.isOpen = true;
    const modalRef = this.modalService.open(SignInComponent);
    modalRef.result.finally(() => (this.isOpen = false));
    return modalRef;
  }
}
