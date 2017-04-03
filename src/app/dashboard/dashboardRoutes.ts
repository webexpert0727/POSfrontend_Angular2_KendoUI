import {Routes} from '@angular/router';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {AuthGuard} from '../auth/guards/auth.guard';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';

export const dashboardRoutes: Routes = [
    {
        path: '',
        canActivate: [AuthGuard],
        component: DashboardLayoutComponent,
        children: [
            {path: '', component: MainDashboardComponent}
        ]
    }
];
