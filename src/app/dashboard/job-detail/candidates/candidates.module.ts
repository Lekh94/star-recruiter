import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CandidatesComponent } from './candidates.component';


const route: Routes = [
    {
        path: '',
        component: CandidatesComponent,
        children: [
            {
                path: '',
                redirectTo: 'add',
                loadChildren: () => import('./add-candidate/add-candidate.module').then(mod => mod.AddCandidateModule)
            },
            {
                path: 'add',
                loadChildren: () => import('./add-candidate/add-candidate.module').then(mod => mod.AddCandidateModule)
            },
            {
                path: ':id/edit',
                loadChildren: () => import('./add-candidate/add-candidate.module').then(mod => mod.AddCandidateModule)
            },
            {
                path: 'all',
                loadChildren: () => import('./cadidates-list/cadidates-list.module').then(mod => mod.CandidatesListModule)
            }
        ]        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule
    ],
    declarations: [CandidatesComponent]
})

export class CandidatesModule { }