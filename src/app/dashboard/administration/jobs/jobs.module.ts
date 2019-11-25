import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { HotTableModule } from '@handsontable/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


const route: Routes = [
    {
        path: '',
        component: JobsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./job-list/job-list.module').then(mod => mod.JobListModule)
            },
            {
                path: 'add-job',
                loadChildren: () => import('./add-job/add-job.module').then(mod => mod.AddJobModule)
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
    declarations: [JobsComponent]
})

export class JobsModule { }