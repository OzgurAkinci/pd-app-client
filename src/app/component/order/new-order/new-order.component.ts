import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface ItemData {
  id: number;
  name: string;
  buyer: string;
  price: string;
}

@Component({ templateUrl: 'new-order.component.html' })
export class NewOrderComponent implements OnInit{
    searchValue = '';
    selectedProductCategoryValue: any;
    selectedProductBrandValue: any;
    validateForm!: FormGroup;
    visibleProduct = false;

    constructor(private fb: FormBuilder) {
      this.validateForm = this.fb.group({
        productName: ['', Validators.required],
        productCategory: ['', Validators.required],
        productBrand: ['', Validators.required]
      });
    }

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

  resetForm(): void {
    this.validateForm.reset();
  }

  openProductDetail(): void {
    this.visibleProduct = true;
  }

  closeProductDetail(): void {
    this.visibleProduct = false;
  }
}
