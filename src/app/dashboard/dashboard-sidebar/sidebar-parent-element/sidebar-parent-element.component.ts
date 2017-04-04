import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-sidebar-parent-element',
    templateUrl: './sidebar-parent-element.component.html'
})
export class SidebarParentElementComponent implements OnInit {

    opened: boolean = false;

    constructor() {
    }

    toggle() {
        console.log(this.opened);
        this.opened = !this.opened;
    }

    ngOnInit() {
    }
}
