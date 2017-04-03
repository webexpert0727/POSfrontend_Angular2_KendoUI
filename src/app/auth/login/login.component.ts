import {Component, OnInit} from '@angular/core';
import {LoginForm} from './login-form';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    private model = new LoginForm;
    private errors = new LoginForm;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    submit() {
        this.authService.login(this.model).subscribe(() => {
        }, (error: LoginForm) => this.errors = error);
    }
}
