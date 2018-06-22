import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import {NotFoundComponent} from './not-found/not-found.component';
import {AuthService} from "./auth.service";
import {AuthGuardService} from "./auth-guard.service";
import {HeaderComponent} from './header/header.component';

import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,

    HomePageComponent,
    NotFoundComponent,

    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
