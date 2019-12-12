import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotTableModule } from '@handsontable/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { JobDetailComponent } from './job-detail.component';


const route: Routes = [
    {
        path: '',
        component: JobDetailComponent,
        children: [
            {
                path: '',
                redirectTo: 'overview',
                pathMatch: 'full',
                loadChildren: () => import('./overview/overview.module').then(mod => mod.OverviewModule)
            },
            {
                path: 'overview',
                loadChildren: () => import('./overview/overview.module').then(mod => mod.OverviewModule)
            },
            {
                path: 'talent-pool',
                loadChildren: () => import('./talent-pool/talent-pool.module').then(mod => mod.TalentPoolModule)
            },
            {
                path: 'hiring',
                loadChildren: () => import('./hiring/hiring.module').then(mod => mod.HiringModule)
            },
            {
                path: 'import',
                loadChildren: () => import('./import/import.module').then(mod => mod.ImportFileModule)
            },
            {
                path: 'timeline',
                loadChildren: () => import('./timeline/job-timeline.module').then(mod => mod.JobTimelineModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        HotTableModule,
        NzIconModule,
        NzButtonModule
    ],
    declarations: [JobDetailComponent]
})

export class JobDetailsModule { }