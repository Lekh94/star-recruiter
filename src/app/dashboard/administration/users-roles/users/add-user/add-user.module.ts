import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user.component';

const route: Routes = [
    {
        path: '',
        component: AddUserComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    declarations: [
        AddUserComponent,
    ]
})

export class AddUserModule { }