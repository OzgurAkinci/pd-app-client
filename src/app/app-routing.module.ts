import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component';
import { LoginComponent } from './auth';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', loadChildren: () => import('./component/component.module').then(m => m.ComponentModule)},
    { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
    // otherwise redirect to component
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
