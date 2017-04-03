import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-parent-element',
    templateUrl: './sidebar-parent-element.component.html'
})
export class ParentElementComponent implements OnInit {

    opened: boolean = false;
    @Input() title: string;

    constructor() {
    }

    ngOnInit() {
    }

}
