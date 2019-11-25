import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../shared/login/login.component';
import { ResetPasswordComponent } from '../shared/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../shared/forgot-password/forgot-password.component';
import { SignUpComponent } from '../shared/sign-up/sign-up.component';

export const dashboardRoute: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./dashboard-data/dashboard-data.module').then(mod => mod.DashboardDataModule)
            },
            {
                path: 'administration',
                loadChildren: () => import('./administration/administration.module').then(mod => mod.AdministrationModule)
            },
            {
                path: 'administration/jobs/:id',
                loadChildren: () => import('./job-detail/job-detail.module').then(mod => mod.JobDetailsModule)
            }
        ]
    },
    {
        path: 'sign-up',
        component: SignUpComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: 'reset-password',
        component: ResetPasswordComponent
    }
]