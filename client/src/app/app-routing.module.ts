import { OrderPageComponent } from './components/order-page/order-page.component';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { EventDetailPageComponent } from './components/event-detail-page/event-detail-page/event-detail-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EventsComponent } from './components/events-page/events/events.component';
import { ManageEventsComponent } from './components/manage-event-page/manage-events/manage-events.component';
import { CreateEventComponent } from './components/create-event/create-event.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'event/:id', component: EventDetailPageComponent },
  { path: 'manage-events', component: ManageEventsComponent },
  { path: 'create-event', component: CreateEventComponent },
  { path: 'edit-event/:id', component: EditEventComponent },
  { path: 'order/:id', component: OrderPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
