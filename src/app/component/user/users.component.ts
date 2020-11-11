import {Component, OnInit} from '@angular/core';

import { UserService } from '../../_services';

interface ItemData {
  id: number;
  name: string;
  buyer: string;
  price: string;
}

@Component({ templateUrl: 'users.component.html' })
export class UsersComponent implements OnInit{
    visibleUserDetail = false;

    constructor(private userService: UserService) { }

    indeterminate = false;
    listOfCurrentPageData: ItemData[] = [];
    listOfData: ItemData[] = [];


    onCurrentPageDataChange($event: ItemData[]): void {
      this.listOfCurrentPageData = $event;
    }


    ngOnInit(): void {
      this.listOfData = new Array(200).fill(0).map((_, index) => {
        return {
          id: index,
          name: `Product ${index}`,
          buyer: `Buyer ${index}`,
          price: `London, Park Lane no. ${index}`
        };
      });
    }

  openUserDetail(): void {
    this.visibleUserDetail = true;
  }

  closeUserDetail(): void {
    this.visibleUserDetail = false;
  }
}
