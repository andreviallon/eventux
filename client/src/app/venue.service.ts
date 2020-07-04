import { IVenue } from './state/venue/venue.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  private venues: IVenue[] = [
    {
      _id: '1',
      name: 'Blank Venue & Pop-up',
      address: 'H. C. Andersens Blvd. 11, 1. th',
      city: 'Copenhagen',
      zipcode: '1553',
      country: 'Denmark',
      phoneNumber: 30303030,
      img: 'imgUrl',
      website: 'https://blank-venue.dk/'
    },
    {
      _id: '2',
      name: 'Blank Venue & Pop-up',
      address: 'H. C. Andersens Blvd. 11, 1. th',
      city: 'Copenhagen',
      zipcode: '1553',
      country: 'Denmark',
      phoneNumber: 30303030,
      img: 'imgUrl',
      website: 'https://blank-venue.dk/'
    }
  ]

  public getVenues(): IVenue[] {
    console.log('getVenues service', this.venues);
    return this.venues;
  }

  public getVenue(id: string): IVenue {
    return this.venues.find(event => event._id === id);
  }

}
