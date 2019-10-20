import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoadingScreenService {

  private _loading: boolean = false;
  loadingStatus: Subject<boolean> = new Subject();

  get Loading():boolean {
    return this._loading;
  }

  set Loading(value) {
    this._loading = value;
    this.loadingStatus.next(value);
  }

  startLoading() {
    this.Loading=true;
  }

  stopLoading() {
    this.Loading = false;
  }
}
