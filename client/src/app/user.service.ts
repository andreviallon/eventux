import { Injectable } from '@angular/core';

export enum Permission {
  ADMIN = 'Admin',
  VIEWER = 'Viewer'
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  permission: Permission;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    _id: 'some id',
    firstName: 'John',
    lastName: 'Doe',
    avatar: './assets/john-doe-avatar.png',
    permission: Permission.ADMIN
  };

  constructor() { }

  getUser(): User {
    return this.user;
    // return undefined;
  }
}
