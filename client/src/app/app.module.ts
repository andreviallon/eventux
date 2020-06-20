import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { EventState } from './state/event.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './connected-components/header/header.component';
import { ErrorPageComponent } from './connected-components/error-page/error-page.component';
import { EventDetailPageComponent } from './connected-components/event-detail-page/event-detail-page.component';
import { HomePageComponent } from './connected-components/home-page/home-page.component';
import { EventsPageComponent } from './connected-components/events-page/events-page.component';
import { CreateEventPageComponent } from './connected-components/create-event-page/create-event-page.component';

import { HeroComponent } from './components/hero/hero.component';
import { UpcomingEventsComponent } from './components/upcoming-events/upcoming-events.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { FrontPageSearchComponent } from './components/front-page-search/front-page-search.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { EventsFilterComponent } from './components/events-filter/events-filter.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';

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
    EventListComponent,
    EventsFilterComponent,
    DatePickerComponent,
  ],
  imports: [
    NgxsModule.forRoot([
      EventState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsRouterPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
