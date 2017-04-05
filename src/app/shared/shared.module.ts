import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {RecaptchaModule} from 'ng-recaptcha';
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
    declarations: [DropdownComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        RecaptchaModule.forRoot(),
        RecaptchaFormsModule,
        // ... and register it
        ButtonsModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        RecaptchaFormsModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        RecaptchaModule,
        ButtonsModule,
        DropdownComponent
    ]
})
export class SharedModule {
}
