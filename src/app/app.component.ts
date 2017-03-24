import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'Hello World!';

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
