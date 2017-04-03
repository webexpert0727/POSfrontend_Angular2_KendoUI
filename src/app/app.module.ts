import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {DashboardModule} from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        DashboardModule,
        AuthModule,
        CoreModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
