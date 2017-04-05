import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../../services/sidebar.service';

@Component({
    selector: 'app-sidebar-parent-element',
    templateUrl: './sidebar-parent-element.component.html'
})
export class SidebarParentElementComponent implements OnInit {

    opened: boolean = false;

    constructor(public sidebarService:SidebarService) {
    }

    toggle() {
        console.log(this.opened);
        this.opened = !this.opened;
    }

    ngOnInit() {
    }
}
