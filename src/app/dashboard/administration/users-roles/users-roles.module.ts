import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsersAndRolesComponent } from './users-roles.component';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';

const route: Routes = [
    {
        path: '',
        component: UsersAndRolesComponent,
        children: [
            {
                path: '',
                redirectTo: 'users',
                loadChildren: () => import('./users/users.module').then(mod => mod.UsersComponentModule)
            },
            {
                path: 'users',
                loadChildren: () => import('./users/users.module').then(mod => mod.UsersComponentModule)
            },
            {
                path: 'access',
                loadChildren: () => import('./access/access.module').then(mod => mod.AccessComponentModule)
            }
        ]
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
        UsersAndRolesComponent,
    ]
})

export class UsersAndRolesModule { }