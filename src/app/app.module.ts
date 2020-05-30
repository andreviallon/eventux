import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailPageComponent } from './event-detail-page/event-detail-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { CreateEventPageComponent } from './create-event-page/create-event-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    UpcomingEventsComponent,
    EventCardComponent,
    EventsComponent,
    EventDetailComponent,
    ErrorPageComponent,
    CreateEventComponent,
    EventDetailPageComponent,
    HomePageComponent,
    EventsPageComponent,
    CreateEventPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
