import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HiringComponent } from './hiring.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzButtonModule } from 'ng-zorro-antd';


const route: Routes = [
    {
        path: '',
        component: HiringComponent,
        children: [
            {
                path: '',
                redirectTo: 'candidates',
                loadChildren: () => import('./candidates/candidates.module').then(mod => mod.CandidatesModule)
            },
            {
                path: 'candidates',
                loadChildren: () => import('./candidates/candidates.module').then(mod => mod.CandidatesModule)
            },
            {
                path: 'declines',
                loadChildren: () => import('./declines/declines.module').then(mod => mod.DeclinesModule)
            },
            {
                path: 'interviews',
                loadChildren: () => import('./interviews/interviews.module').then(mod => mod.InterviewsModule)
            },
            {
                path: 'interviews/:id',
                loadChildren: () => import('./interviews/interviews.module').then(mod => mod.InterviewsModule)
            },
            {
                path: 'joined',
                loadChildren: () => import('./joined/joined.module').then(mod => mod.JoinedModule)
            },
            {
                path: 'offers',
                loadChildren: () => import('./offers/offers.module').then(mod => mod.OffersModule)
            },
            {
                path: 'rejected',
                loadChildren: () => import('./rejected/rejected.module').then(mod => mod.RejectedModule)
            },
            {
                path: 'resumes',
                loadChildren: () => import('./resumes/resumes.module').then(mod => mod.ResumesModule)
            },
            {
                path: 'telephonic',
                loadChildren: () => import('./telephonic/telephonic.module').then(mod => mod.TelephonicModule)
            }
        ]
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