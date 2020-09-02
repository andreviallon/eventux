import { UserService, User, Permission } from '../../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <mat-toolbar>
      <div class="flex-container">
        <div class="nav-start">
          <span>Eventux</span>

          <button mat-flat-button routerLink="/home">Home</button>
          <button mat-flat-button routerLink="/events">Events</button>
        </div>

        <ng-container *ngIf="currentUser; then logedIn; else logedOut"></ng-container>

        <ng-template #logedIn>
          <div class="menu">
            <img src="{{currentUser.avatar}}" class="avatar"/>
            <button mat-button [matMenuTriggerFor]="beforeMenu">
              {{ currentUser.firstName }} {{ currentUser.lastName }}
              <mat-icon aria-hidden="false" aria-label="Example home icon">keyboard_arrow_down</mat-icon>
            </button>
            <mat-menu #beforeMenu="matMenu" xPosition="before">
              <button mat-menu-item class="button-menu" *ngIf="isAdmin()" routerLink="/manage-events">Manage Events</button>
                <mat-divider></mat-divider>
              <button mat-menu-item class="button-menu">Logout</button>
            </mat-menu>
          </div>
        </ng-template>

        <ng-template #logedOut>
          <div class="buttons">
            <button mat-button routerLink="/">Login</button>
            <button mat-flat-button color="primary" routerLink="/">Sign Up</button>
          </div>
        </ng-template>

      </div>
    </mat-toolbar>
`,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showMobileMenu = false;
  public showDesktopMenu = false;
  public currentUser: User;

  constructor(private userService: UserService) {

  }

  ngOnInit() {
    this.currentUser = this.userService.getUser();
  }

  public toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }

  public toggleDesktopMenu() {
    this.showDesktopMenu = !this.showDesktopMenu;
  }

  public isAdmin() {
    return this.currentUser.permission === Permission.ADMIN;
  }
}
