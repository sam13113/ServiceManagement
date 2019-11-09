import { Component,  ElementRef, Renderer, AfterViewInit, Renderer2 } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { FacadeService } from 'src/app/services/facade.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements AfterViewInit {
  authenticationError = false;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
    rememberMe: [false]
  });
  constructor(private elementRef: ElementRef,
              private renderer: Renderer2,
              public activeModal: NgbActiveModal,
              private modalService: NgbModal, private fb: FormBuilder, private facade: FacadeService
  ) { }

  ngAfterViewInit() {
    // setTimeout(() => this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('#defaultForm-email'), 'focus', []), 0);
  }
  cancel() {
    this.authenticationError = false;
    this.loginForm.patchValue({
      username: '',
      password: ''
    });
    this.activeModal.dismiss('cancel');
  }
  login() {
this.facade.login({ username: this.loginForm.get('username').value,
password: this.loginForm.get('password').value, rememberMe: this.loginForm.get('rememberMe').value}).subscribe(
  authentication => {
    this.authenticationError = false;
    this.activeModal.dismiss('login success');
  }
);
  }
  register() {

  }
  requestResetPassword() {

  }
}
