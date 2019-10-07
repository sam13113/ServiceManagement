import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './common/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderStringService } from './services/header-string.service';
import { Globals } from './common/constants/Globals';

@NgModule({
  declarations: [AppComponent, routingComponents],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [HeaderStringService, Globals],
  bootstrap: [AppComponent]
})
export class AppModule {}
