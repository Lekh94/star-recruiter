import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';

const route: Routes = [
    {
        path: '',
        component: UsersListComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzButtonModule,
        NzIconModule
    ],
    declarations: [
        UsersListComponent,
    ]
})

export class UsersListModule { }