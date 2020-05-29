import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateEventComponent } from './create-event/create-event.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    UpcomingEventsComponent,
    EventCardComponent,
    HomeComponent,
    EventsComponent,
    EventDetailComponent,
    ErrorPageComponent,
    CreateEventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
