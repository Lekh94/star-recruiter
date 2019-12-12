import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TalentPoolComponent } from './talent-pool.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd';


const route: Routes = [
    {
        path: '',
        component: TalentPoolComponent,
        children: [
            {
                path:'',
                loadChildren: () => import('./pool-list/pool-list.module').then(mod => mod.PoolListModule)
            },
            {
                path:'add',
                loadChildren: () => import('../talent-pool/add-candidate/add-candidate.module').then(mod => mod.AddCandidateModule)
            }
        ]        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        SharedModule,
        NzButtonModule
    ],
    declarations: [TalentPoolComponent]
})

export class TalentPoolModule { }