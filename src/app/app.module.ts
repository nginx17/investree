import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
	  FormsModule,
	  FontAwesomeModule,
    BrowserModule,
	HttpClientModule,
    AppRoutingModule
  ],
  providers: [
	  CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
