import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';

import {en_US, NZ_I18N} from 'ng-zorro-antd/i18n';
import {NZ_ICONS} from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DemoNgZorroAntdModule} from '@app/ng-zorro-antd-module';
import {LoginComponent} from './login/login.component';
import {AuthRoutingModule} from '@app/auth/auth-routing.module';
import {CommonModule} from '@angular/common';
import {RegisterComponent} from '@app/auth/register/register.component';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key]);

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoNgZorroAntdModule,
    AuthRoutingModule,
    CommonModule
  ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
  exports: [LoginComponent, RegisterComponent],
    providers: [
        { provide: NZ_I18N, useValue: en_US }, { provide: NZ_ICONS, useValue: icons }
    ]
})
export class AuthModule { }
