import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgxsModule } from '@ngxs/store';
import { EventState } from './state/event/event.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailComponent } from './components/event-detail-page/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsComponent } from './components/events-page/events/events.component';
import { EventsFilterComponent } from './components/events-page/events-filter/events-filter.component';
import { ManageEventsComponent } from './components/manage-event-page/manage-events/manage-events.component';
import { ManageEventCardComponent } from './components/manage-event-page/manage-event-card/manage-event-card.component';
import { ManageTeachersComponent } from './components/manage-teacher-page/manage-teachers/manage-teachers.component';
import { ManageTeacherCardComponent } from './components/manage-teacher-page/manage-teacher-card/manage-teacher-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FrontPageSearchComponent } from './components/home-page/front-page-search/front-page-search.component';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';
import { EventCardComponent } from './components/shared/event-card/event-card.component';
import { EventListComponent } from './components/shared/event-list/event-list.component';
import { ManageHeaderComponent } from './components/shared/manage-header/manage-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventsComponent,
    EventsFilterComponent,
    ManageEventsComponent,
    ManageEventCardComponent,
    ManageTeachersComponent,
    ManageTeacherCardComponent,
    FrontPageSearchComponent,
    DatePickerComponent,
    EventCardComponent,
    EventListComponent,
    ManageHeaderComponent
  ],
  imports: [
    NgxsModule.forRoot([
      EventState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
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
