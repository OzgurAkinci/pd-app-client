import {Component, OnInit} from '@angular/core';


interface ItemData {
  id: number;
  name: string;
  buyer: string;
  price: string;
}

@Component({ templateUrl: 'orders.component.html' })
export class OrdersComponent implements OnInit{


    constructor() { }

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
}
