import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidatesComponent } from './candidates.component';


const route: Routes = [
    {
        path: '',
        component: CandidatesComponent
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
        CandidatesComponent
    ]
})

export class CandidatesModule { }