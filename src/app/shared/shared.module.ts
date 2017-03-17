import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Import the ButtonsModule...
import {ButtonsModule} from '@progress/kendo-angular-buttons';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpModule,
        // ... and register it
        ButtonsModule
    ],
    providers: [],
    bootstrap: [],
    exports: [
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule,
        // ... and register it
        ButtonsModule
    ]
})
export class SharedModule {
}
