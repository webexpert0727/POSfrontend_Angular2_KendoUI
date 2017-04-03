import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';

@Component({
    selector: 'app-dashboard-header',
    templateUrl: './dashboard-header.component.html',
})
export class DashboardHeaderComponent implements OnInit {

    constructor(public authService:AuthService) {
    }

    ngOnInit() {
    }

    logout() {

    }

}
