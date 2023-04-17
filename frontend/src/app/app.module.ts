import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ArranqueComponent } from './arranque/arranque.component';
import { HeaderComponent } from './header/header.component';
import { Taller1Component } from './taller1/taller1.component';

@NgModule({
  declarations: [
    AppComponent,
      ArranqueComponent,
      HeaderComponent,
      Taller1Component
   ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
