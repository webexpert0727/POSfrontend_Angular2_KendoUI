import {Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const coreRoutes: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent},
];

