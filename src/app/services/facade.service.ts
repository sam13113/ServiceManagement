import { Injectable, Injector } from '@angular/core';
import { HeaderStringService } from './header-string.service';
import { Observable } from 'rxjs';
import { LoadingScreenService } from './loadingscreen/loading-screen.service';
import { RouterEvent } from '@angular/router';
import { Globals } from '../common/constants/Globals';
import { RoutingEnumConstants, IRouteObject } from '../common/constants/app-constants';
import { LoginModalService } from './login/login.modal.service';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './login/login.service';
import { AccountService } from './authentication/account.service';

@Injectable()
export class FacadeService {

  private _headerStringService: HeaderStringService;
  private _loadingScreenService: LoadingScreenService;
  private _loginModalService: LoginModalService;
  private _loginService: LoginService;
  private _accountService: AccountService;
  private _globals: Globals;

  public get headerStringService(): HeaderStringService {
    if (!this._headerStringService) {
      this._headerStringService = this.injector.get(HeaderStringService);
    }
    return this._headerStringService;
  }

  public get loadingScreenService(): LoadingScreenService {
    if (!this._loadingScreenService) {
      this._loadingScreenService = this.injector.get(LoadingScreenService);
    }
    return this._loadingScreenService;
  }
  public get loginModalService(): LoginModalService {
    if (!this._loginModalService) {
      this._loginModalService = this.injector.get(LoginModalService);
    }
    return this._loginModalService;
  }
  public get loginService(): LoginService {
    if (!this._loginService) {
      this._loginService = this.injector.get(LoginService);
    }
    return this._loginService;
  }

  public get accountService(): AccountService {
    if (!this._accountService) {
      this._accountService = this.injector.get(AccountService);
    }
    return this._accountService;
  }

  public get globals(): Globals {
    if (!this._globals) {
      this._globals = this.injector.get(Globals);
    }
    return this._globals;
  }
  constructor(private injector: Injector) { }
  // methods from HeaderStringService
  public changeMessage(message: string): void {
    this.headerStringService.changeMessage(message);
  }

  public get messageSource(): Observable<string> {
    return this.headerStringService.messageSource;
  }
  // methods from LoadingScreenService
  public routernavigationEvent(event: RouterEvent): void {
    this.loadingScreenService.routernavigationEvent(event);
  }
  public startLoadingScreen(): void {
    this.loadingScreenService.startLoading();
  }
  public stopLoadingScreen(): void {
    this.loadingScreenService.stopLoading();
  }
  // methods from LoginModalService
  public loginWindowOpen(): NgbModalRef {
    return this.loginModalService.open();
  }
  // methods from loginService
  public login(credentials) {
    return this.loginService.login(credentials);
  }

  public logout(): void {
    this.loginService.logout();
  }

  // methods from accountService
   public isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }

  // methods from Globals
  public setRoutingConstant(routingConstant: RoutingEnumConstants): void {
    this.globals.setRoutingConstant(routingConstant);
  }
  public getRoutingConstant(): RoutingEnumConstants {
    return this.globals.getRoutingConstant();
  }
  public getPreviousPage(): IRouteObject {
    return this.globals.getPreviousPage();
  }
  public getRoutingObject(): IRouteObject {
    return this.globals.getRoutingObject();
  }
}
