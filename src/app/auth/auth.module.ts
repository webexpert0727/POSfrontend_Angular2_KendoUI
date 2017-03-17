import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';
import {authRoutes} from './authRoutes';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(authRoutes)
    ],
    providers: [
        AuthService
    ],
    declarations: [LoginComponent]
})
export class AuthModule {
}
