import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { Intro2Component } from './components/intro2/intro2.component';
import { LoginComponent } from './components/login/login.component';
import { EstudanteProfessorComponent } from './components/estudante-professor/estudante-professor.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    Intro2Component,
    LoginComponent,
    EstudanteProfessorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
