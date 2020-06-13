import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './connected-components/home-page/home-page.component';
import { EventsPageComponent } from './connected-components/events-page/events-page.component';
import { EventDetailPageComponent } from './connected-components/event-detail-page/event-detail-page.component';
import { CreateEventPageComponent } from './connected-components/create-event-page/create-event-page.component';
import { ErrorPageComponent } from './connected-components/error-page/error-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'events', component: EventsPageComponent },
  { path: 'event/:id', component: EventDetailPageComponent },
  { path: 'create-event', component: CreateEventPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
