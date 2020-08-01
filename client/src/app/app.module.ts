import { TeacherState } from './state/teacher/teacher.state';
import { VenueState } from 'src/app/state/venue/venue.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCropperJsModule } from 'ngx-cropperjs-wrapper';

import { NgxsModule } from '@ngxs/store';
import { EventState } from './state/event/event.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailComponent } from './components/event-detail-page/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsComponent } from './components/events-page/events/events.component';
import { EventsFilterComponent } from './components/events-page/events-filter/events-filter.component';
import { ManageEventsComponent } from './components/manage-event-page/manage-events/manage-events.component';
import { ManageEventCardComponent } from './components/manage-event-page/manage-event-card/manage-event-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { DatePickerComponent } from './components/shared/date-picker/date-picker.component';
import { EventCardComponent } from './components/shared/event-card/event-card.component';
import { EventListComponent } from './components/shared/event-list/event-list.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { HomeSearchComponent } from './components/home-page/home-search/home-search.component';
import { HomeComponent } from './components/home-page/home/home.component';
import { ImageCropperComponent } from './components/shared/image-cropper/image-cropper.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EventDetailPageComponent } from './components/event-detail-page/event-detail-page/event-detail-page.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';

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
    DatePickerComponent,
    EventCardComponent,
    EventListComponent,
    PageHeaderComponent,
    HomeSearchComponent,
    HomeComponent,
    ImageCropperComponent,
    EventFormComponent,
    EventDetailPageComponent,
    EditEventComponent,
  ],
  imports: [
    NgxsModule.forRoot([
      EventState,
      VenueState,
      TeacherState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    AngularMyDatePickerModule,
    ReactiveFormsModule,
    NgxCropperJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule  { }
