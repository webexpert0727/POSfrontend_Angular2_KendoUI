import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {LoginComponent} from './login/login.component';
import {AuthService} from './auth.service';
import {RouterModule} from '@angular/router';
import {authRoutes} from './authRoutes';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(authRoutes)
    ],
    providers: [
        AuthService,
        AuthGuard
    ],
    declarations: [LoginComponent, ForgotPasswordComponent]
})
export class AuthModule {
}
