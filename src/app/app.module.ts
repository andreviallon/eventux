import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './connected-components/header/header.component';
import { HeroComponent } from './pure-components/hero/hero.component';
import { UpcomingEventsComponent } from './pure-components/upcoming-events/upcoming-events.component';
import { EventCardComponent } from './pure-components/event-card/event-card.component';
import { EventDetailComponent } from './pure-components/event-detail/event-detail.component';
import { ErrorPageComponent } from './connected-components/error-page/error-page.component';
import { CreateEventComponent } from './pure-components/create-event/create-event.component';
import { EventDetailPageComponent } from './connected-components/event-detail-page/event-detail-page.component';
import { HomePageComponent } from './connected-components/home-page/home-page.component';
import { EventsPageComponent } from './connected-components/events-page/events-page.component';
import { CreateEventPageComponent } from './connected-components/create-event-page/create-event-page.component';
import { FrontPageSearchComponent } from './pure-components/front-page-search/front-page-search.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    UpcomingEventsComponent,
    EventCardComponent,
    EventDetailComponent,
    ErrorPageComponent,
    CreateEventComponent,
    EventDetailPageComponent,
    HomePageComponent,
    EventsPageComponent,
    CreateEventPageComponent,
    FrontPageSearchComponent,
  ],
  imports: [
    // NgxsModule.forRoot([
    //   EventState
    // ]),
    // NgxsReduxDevtoolsPluginModule.forRoot(),
    // NgxsLoggerPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
