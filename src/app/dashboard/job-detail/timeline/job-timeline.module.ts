import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { JobTimelineComponent } from './job-timeline.component';
import { SharedModule } from 'src/app/shared/shared.module';


const route: Routes = [
    {
        path: '',
        component: JobTimelineComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        SharedModule
    ],
    declarations: [JobTimelineComponent]
})

export class JobTimelineModule { }