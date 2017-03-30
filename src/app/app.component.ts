import {Component, Inject, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    title = 'Hello World!';

    constructor(@Inject('siteConstants') private constants: any) {}


    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
    ngOnInit() {

    }
}
