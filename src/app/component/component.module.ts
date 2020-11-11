import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClientJsonpModule} from '@angular/common/http';

import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DemoNgZorroAntdModule} from '@app/ng-zorro-antd-module';
import {AppRoutingModule} from '@app/app-routing.module';
import {ErrorInterceptor, JwtInterceptor} from '../_helpers';
import {CommonModule} from '@angular/common';
import {HomeComponent} from '@app/component/home/home.component';
import {ComponentRoutingModule} from '@app/component/component-routing.module';
import {ComponentComponent} from '@app/component/component.component';
import {ProductsComponent} from '@app/component/product/products.component';
import {OrdersComponent} from '@app/component/order/orders.component';
import {UsersComponent} from '@app/component/user/users.component';
import {NewOrderComponent} from '@app/component/order/new-order/new-order.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    ScrollingModule,
    DragDropModule,
    ComponentRoutingModule
  ],
    declarations: [
      ComponentComponent,
      HomeComponent,
      ProductsComponent,
      OrdersComponent,
      NewOrderComponent,
      UsersComponent,
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
    ]
})
export class ComponentModule { }
