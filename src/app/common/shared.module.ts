import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FacadeService } from 'src/app/services/facade.service';
import { HeaderStringService } from '../services/header-string.service';
import { LoadingScreenService } from '../services/loadingscreen/loading-screen.service';
import { Globals } from './constants/Globals';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginModalService } from '../services/login/login.modal.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { AccountService } from '../services/authentication/account.service';
import { AuthServiceProvider } from '../services/authentication/auth-jwt.service';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoadScreenComponent,
    SignInComponent
  ],
  imports: [NgbModule, CommonModule, FormsModule, ReactiveFormsModule, NgxWebstorageModule.forRoot()],
  providers: [
    FacadeService,
    HeaderStringService,
    LoadingScreenService,
    Globals,
    LoginModalService,
    LoginService,
    AccountService,
    AuthServiceProvider
  ],
  entryComponents: [SignInComponent],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadScreenComponent,
    SignInComponent
  ]
})
export class SharedModule {}
