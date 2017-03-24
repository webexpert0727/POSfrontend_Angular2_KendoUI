import {Routes} from '@angular/router';
import {LoginComponent} from '../auth/login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

export const authRoutes: Routes = [
    {
        path: 'auth',
        children: [
            {path: 'login', component: LoginComponent},
            {path: 'forgot', component: ForgotPasswordComponent}
        ]
    }
];
