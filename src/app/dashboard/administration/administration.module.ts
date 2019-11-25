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
                redirectTo: 'jobs',
                pathMatch: 'full',
                loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
            },
            {
                path: 'jobs',
                loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)
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