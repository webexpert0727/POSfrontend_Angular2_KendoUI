import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {coreRoutes} from './coreRoutes';

@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        BrowserModule,
        SharedModule,
        RouterModule.forRoot(coreRoutes)
    ],
    providers: [],
    bootstrap: []
})
export class CoreModule {
}
