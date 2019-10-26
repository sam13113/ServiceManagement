import { Component, OnInit, ChangeDetectorRef, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingScreenService } from 'src/app/services/loadingscreen/loading-screen.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-load-screen',
  templateUrl: './load-screen.component.html',
  styleUrls: ['./load-screen.component.css']
})
export class LoadScreenComponent implements AfterViewInit, OnDestroy  {

   debounceTime: number = 200;
  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService, private _elmRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef) {}

    ngAfterViewInit(): void {
      this._elmRef.nativeElement.style.display = 'none';
      this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
        (status: boolean) => {
          this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
          this._changeDetectorRef.detectChanges();
        }
      );
    }

    ngOnDestroy() {
      this.loadingSubscription.unsubscribe();
    }

}
