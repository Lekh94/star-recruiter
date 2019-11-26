import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AccessComponent } from './access.component';
import { NzIconModule, NzButtonModule } from 'ng-zorro-antd';

const route: Routes = [
    {
        path: '',
        component: AccessComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        NzButtonModule
    ],
    declarations: [
        AccessComponent,
    ]
})

export class AccessComponentModule { }