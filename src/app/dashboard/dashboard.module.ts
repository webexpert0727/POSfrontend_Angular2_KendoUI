import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboardRoutes';
import {MainDashboardComponent} from './main-dashboard/main-dashboard.component';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {DashboardSideBarComponent} from './dashboard-sidebar/dashboard-sidebar.component';
import {DashboardHeaderComponent} from './dashboard-header/dashboard-header.component';
import {DashboardFooterComponent} from './dashboard-footer/dashboard-footer.component';
import {SidebarParentElementComponent} from './dashboard-sidebar/sidebar-parent-element/sidebar-parent-element.component';
import {SidebarService} from './services/sidebar.service';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(dashboardRoutes)
    ],
    declarations: [
        MainDashboardComponent,
        DashboardLayoutComponent,
        DashboardSideBarComponent,
        DashboardHeaderComponent,
        DashboardFooterComponent,
        SidebarParentElementComponent
    ],
    providers: [
        SidebarService
    ]
})
export class DashboardModule {
}
