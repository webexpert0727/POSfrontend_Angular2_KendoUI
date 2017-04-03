import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboardRoutes';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardSideBarComponent } from './dashboard-side-bar/dashboard-side-bar.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { DashboardFooterComponent } from './dashboard-footer/dashboard-footer.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [MainDashboardComponent, DashboardLayoutComponent, DashboardSideBarComponent, DashboardHeaderComponent, DashboardFooterComponent]
})
export class DashboardModule {
}
