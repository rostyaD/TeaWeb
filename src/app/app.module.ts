import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import {  MatButtonModule } from '@angular/material/button';
import {  MatCardModule } from '@angular/material/card';
import {  MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { HomeComponent } from './home/home.component';
import { TeaTypeComponent } from './tea-type/tea-type.component';
import { TeaTypeInfoComponent } from './tea-type-info/tea-type-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeaTypeComponent,
    TeaTypeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
