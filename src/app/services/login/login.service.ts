import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { AccountService } from '../authentication/account.service';
import { AuthServiceProvider } from '../authentication/auth-jwt.service';

@Injectable()
export class LoginService {
  constructor(private accountService: AccountService, private authServiceProvider: AuthServiceProvider) {}

  login(credentials) {
    console.log(credentials);
    // if(credentials.username==='user'&&credentials.password==='user'){
    //   this._isAuthenticated=true;
    // return of(true);}else{
    //   this._isAuthenticated=false;
    //   return of(false);
    // }
    return this.authServiceProvider.login(credentials).pipe(flatMap(() => this.accountService.identity(true)));
  }

  logout() {
    // this._isAuthenticated=false;
    this.authServiceProvider.logout().subscribe(null, null, () => this.accountService.authenticate(null));
  }
}
