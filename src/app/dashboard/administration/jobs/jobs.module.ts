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
                redirectTo: 'profiles',
                loadChildren: () => import('./profiles/profiles.module').then(mod => mod.JobProfilesModule)
            },
            {
                path: 'openings',
                loadChildren: () => import('./openings/openings.module').then(mod => mod.JobOpeningsModule)
            },
            {
                path: 'profiles',
                loadChildren: () => import('./profiles/profiles.module').then(mod => mod.JobProfilesModule)
            },
            {
                path: 'access',
                loadChildren: () => import('./access/access.module').then(mod => mod.JobAccessModule)
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