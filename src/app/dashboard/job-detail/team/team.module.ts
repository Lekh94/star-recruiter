import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { NzIconModule } from 'ng-zorro-antd/icon';


const route: Routes = [
    {
        path: '',
        component: TeamComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule
    ],
    declarations: [TeamComponent]
})

export class TeamModule { }