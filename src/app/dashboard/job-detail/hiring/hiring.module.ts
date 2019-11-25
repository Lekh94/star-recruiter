import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HiringComponent } from './hiring.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';


const route: Routes = [
    {
        path: '',
        component: HiringComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(route),
        NzIconModule,
    ],
    declarations: [
        HiringComponent
    ]
})

export class HiringModule { }