import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { InterviewsComponent } from './interviews.component';
import { NzButtonModule } from 'ng-zorro-antd';


const route: Routes = [
    {
        path: '',
        component: InterviewsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route),
        NzIconModule,
        NzButtonModule
    ],
    declarations: [
        InterviewsComponent
    ]
})

export class InterviewsModule { }