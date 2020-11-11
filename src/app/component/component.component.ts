import {Component, OnInit} from '@angular/core';

import {Router} from '@angular/router';
import {AuthenticationService, UserService} from '../_services';
import {User} from '../_models';

@Component({ templateUrl: 'component.component.html' })
export class ComponentComponent implements OnInit{
    currentUser: User;
    isCollapsed = false;
    visibleShoppingCart = false;

    constructor(private userService: UserService,
                private router: Router,
                private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit(): any {

    }

  change(value: boolean): void {
    console.log(value);
  }

  logout(): any {
    this.authenticationService.logout();
    this.router.navigate(['/auth/login']);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  openShoppingCart(): void {
    this.visibleShoppingCart = true;
  }

  closeShoppingCart(): void {
    this.visibleShoppingCart = false;
  }
}
