import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {PasswordResetForm} from './password-reset-form';
import {NgForm} from '@angular/forms';
import {RecaptchaComponent} from 'ng-recaptcha';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {

    private model = new PasswordResetForm();
    @ViewChild('captcha') private captcha: RecaptchaComponent;
    @ViewChild('form') private form: NgForm;

    constructor(@Inject('siteConstants') private constants: any) {
    }

    reset() {
        if (this.form.valid) {
            console.log('submit', this.model)
        } else {
            this.captcha.execute()
        }
    }

    ngOnInit() {
    }
}
