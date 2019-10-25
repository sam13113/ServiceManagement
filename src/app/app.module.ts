import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from './common/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadScreenComponent } from './components/load-screen/load-screen.component';
import { LoadingScreenInterceptor } from './helpers/loaders/loadingscreeninterceptor';

@NgModule({
  declarations: [AppComponent, routingComponents, LoadScreenComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoadingScreenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
