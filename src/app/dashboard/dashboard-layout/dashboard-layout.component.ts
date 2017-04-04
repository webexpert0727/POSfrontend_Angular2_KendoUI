import {Component, OnInit} from '@angular/core';
import {SidebarService} from '../services/sidebar.service';

@Component({
    selector: 'app-dashboard-layout',
    templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent implements OnInit {

    constructor(private sidebarService: SidebarService) {
    }

    ngOnInit() {
    }

}
