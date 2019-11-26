import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

const route: Routes = [
    {
        path: '',
        component: UsersComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./users-list/users-list.module').then(mod => mod.UsersListModule)
            },
            {
                path: 'add-user',
                loadChildren: () => import('./add-user/add-user.module').then(mod => mod.AddUserModule)
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route)
    ],
    declarations: [
        UsersComponent,
    ]
})

export class UsersComponentModule { }