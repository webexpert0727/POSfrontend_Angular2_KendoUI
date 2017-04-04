import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {SidebarService} from '../services/sidebar.service';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent implements OnInit {

    constructor(public authService:AuthService, public sidebarService:SidebarService) {
    }

    ngOnInit() {
    }
}
