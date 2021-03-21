import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { MenuSuperior2Component } from './components/menu-superior2/menu-superior2.component';
import { PagesComponent } from './components/pages/pages.component';
import { PageloreamComponent } from './components/pageloream/pageloream.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    InicioComponent,
    MenuSuperiorComponent,
    MenuSuperior2Component,
    PagesComponent,
    PageloreamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
