import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from '../_helpers';
import {ComponentComponent} from '@app/component/component.component';
import {ProductsComponent} from '@app/component/product/products.component';
import {OrdersComponent} from '@app/component/order/orders.component';
import {UsersComponent} from '@app/component/user/users.component';
import {NewOrderComponent} from '@app/component/order/new-order/new-order.component';

const routes: Routes = [
  { path: '',   redirectTo: '/app', pathMatch: 'full'},
  { path: 'app', component: ComponentComponent, children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'new-order',
        component: NewOrderComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class ComponentRoutingModule { }
