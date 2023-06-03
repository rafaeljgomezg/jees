import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { MinisteriesComponent } from './components/ministeries/ministeries.component';
import { GetinvolvedComponent } from './components/getinvolved/getinvolved.component';
import { SmallgroupsComponent } from './components/smallgroups/smallgroups.component';
import { EventsComponent } from './components/events/events.component';
import { ServeComponent } from './components/serve/serve.component';
import { BaptismComponent } from './components/baptism/baptism.component';
import { NextstepsComponent } from './components/nextsteps/nextsteps.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { NgOptimizedImage } from '@angular/common';
import { DireccionescelulasComponent } from './components/direccionescelulas/direccionescelulas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MinisteriesComponent,
    GetinvolvedComponent,
    SmallgroupsComponent,
    EventsComponent,
    ServeComponent,
    BaptismComponent,
    NextstepsComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent,
    DireccionescelulasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
