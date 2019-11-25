import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportsComponent } from './reports.component';
import { SharedModule } from 'src/app/shared/shared.module';


const route: Routes = [
    {
        path: '',
        component: ReportsComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./report-list/report-list.module').then(mod => mod.ReportsListModule)
            },
            {
                path: ':id/timeline',
                loadChildren: () => import('./reports-timeline/reports-timeline.module').then(mod => mod.ReportsTimelineModule)
            }
        ]        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule
    ],
    declarations: [ReportsComponent]
})

export class ReportsModule { }