import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AdministrationComponent } from './administration.component';

const route: Routes = [
    {
        path: '',
        component: AdministrationComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full',
                loadChildren: () => import('./overview/overview.module').then(mod => mod.OverviewComponentModule)
            },
            {
                path: 'jobs',
                loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
            },
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(mod => mod.OverviewComponentModule)
            },
            {
                path: 'users-roles',
                loadChildren: () => import('./users-roles/users-roles.module').then(mod => mod.UsersAndRolesModule)
            },
            {
                path: 'customizations',
                loadChildren: () => import('./customizations/customizations.module').then(mod => mod.CustomizationsModule)
            },
            {
                path: 'settings',
                loadChildren: () => import('./settings/settings.module').then(mod => mod.SettingsModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        NzButtonModule
    ],
    declarations: [AdministrationComponent]
})

export class AdministrationModule { }