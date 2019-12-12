import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeclinesComponent } from './declines.component';


const route: Routes = [
    {
        path: '',
        component: DeclinesComponent
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
        DeclinesComponent
    ]
})

export class DeclinesModule { }