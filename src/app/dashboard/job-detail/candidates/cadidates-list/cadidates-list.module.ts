import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidatesListComponent } from './cadidates-list.component';
import { NzButtonModule } from 'ng-zorro-antd';


const route: Routes = [
    {
        path: '',
        component: CandidatesListComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule,
        NzButtonModule
    ],
    declarations: [CandidatesListComponent]
})

export class CandidatesListModule { }