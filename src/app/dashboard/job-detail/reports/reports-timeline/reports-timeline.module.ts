import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReportTimelineComponent } from './reports-timeline.component';


const route: Routes = [
    {
        path: '',
        component: ReportTimelineComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule
    ],
    declarations: [ReportTimelineComponent]
})

export class ReportsTimelineModule { }