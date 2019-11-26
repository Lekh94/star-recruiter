import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { JobAccessComponent } from './access.component';



const route: Routes = [
    {
        path: '',
        component: JobAccessComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        NzButtonModule
    ],
    declarations: [JobAccessComponent]
})

export class JobAccessModule { }