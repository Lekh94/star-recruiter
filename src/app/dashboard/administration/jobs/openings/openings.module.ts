import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { JobOpeningsComponent } from './openings.component';



const route: Routes = [
    {
        path: '',
        component: JobOpeningsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./job-openings/job-openings.module').then(mod => mod.OpeningsListModule)
            },
            {
                path: 'add-opening',
                loadChildren: () => import('./add-job-opening/add-job-opening.module').then(mod => mod.AddJobModule)
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
    declarations: [JobOpeningsComponent]
})

export class JobOpeningsModule { }