import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotTableModule } from '@handsontable/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { JobProfilesComponent } from './profiles.component';


const route: Routes = [
    {
        path: '',
        component: JobProfilesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./job-profiles/job-profiles.module').then(mod => mod.ProfilesListModule)
            },
            {
                path: 'add-profile',
                loadChildren: () => import('./add-job-profile/add-job-profile.module').then(mod => mod.AddJobProfileModule)
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
    declarations: [JobProfilesComponent]
})

export class JobProfilesModule { }