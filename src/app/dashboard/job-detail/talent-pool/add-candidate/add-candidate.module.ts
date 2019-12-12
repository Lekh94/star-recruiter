import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCandidateComponent } from './add-candidate.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageDirective } from 'src/app/shared/directives/errorMessage.directive';


const route: Routes = [
    {
        path: '',
        component: AddCandidateComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule,
        NzButtonModule,
        NzIconModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AddCandidateComponent,
        ErrorMessageDirective
    ]
})

export class AddCandidateModule { }