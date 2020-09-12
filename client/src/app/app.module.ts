import { TeacherState } from './state/teacher/teacher.state';
import { VenueState } from 'src/app/state/venue/venue.state';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxCropperJsModule } from 'ngx-cropperjs-wrapper';
import { NgxsModule } from '@ngxs/store';
import { EventState } from './state/event/event.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EventDetailComponent } from './components/event-detail/event-detail.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { EventsComponent } from './components/events-page/events/events.component';
import { EventsFilterComponent } from './components/events-page/events-filter/events-filter.component';
import { ManageEventsComponent } from './components/manage-event-page/manage-events/manage-events.component';
import { ManageEventCardComponent } from './components/manage-event-page/manage-event-card/manage-event-card.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { EventCardComponent } from './components/shared/event-card/event-card.component';
import { EventListComponent } from './components/shared/event-list/event-list.component';
import { PageHeaderComponent } from './components/shared/page-header/page-header.component';
import { HomeComponent } from './components/home/home.component';
import { ImageCropperComponent } from './components/shared/image-cropper/image-cropper.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { OrderPageComponent } from './components/order-page/order-page.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { EventPricePipe } from './pipes/event-price.pipe';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from './pipes/date.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

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
    EventCardComponent,
    EventListComponent,
    PageHeaderComponent,
    HomeComponent,
    ImageCropperComponent,
    EventFormComponent,
    EditEventComponent,
    OrderPageComponent,
    OrderSummaryComponent,
    EventPricePipe,
    DatePipe,
  ],
  imports: [
    NgxsModule.forRoot([
      EventState,
      VenueState,
      TeacherState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
    AngularMyDatePickerModule,
    ReactiveFormsModule,
    NgxCropperJsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatGridListModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [CurrencyPipe, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule  { }
