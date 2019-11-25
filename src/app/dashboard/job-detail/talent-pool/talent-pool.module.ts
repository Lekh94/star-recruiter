import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TalentPoolComponent } from './talent-pool.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';


const route: Routes = [
    {
        path: '',
        component: TalentPoolComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        SharedModule
    ],
    declarations: [TalentPoolComponent]
})

export class TalentPoolModule { }