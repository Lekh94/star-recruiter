import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { dashboardRoute } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../shared/login/login.component';
import { ResetPasswordComponent } from '../shared/reset-password/reset-password.component';
import { ForgotPasswordComponent } from '../shared/forgot-password/forgot-password.component';
import { AppHeaderComponent } from '../shared/app-header/app-header.component';
import { TimeFrameModalsComponent } from '../shared/modals/time-frame-modal/time-frame-modal';
import { SignUpComponent } from '../shared/sign-up/sign-up.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(dashboardRoute),
        FormsModule,
        ReactiveFormsModule,
        NzButtonModule,
        NzCheckboxModule,
        NzIconModule,
        NzAlertModule,
        NzDropDownModule,
        NzModalModule,
    ],
    declarations: [
        DashboardComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        AppHeaderComponent,
        TimeFrameModalsComponent,
        SignUpComponent
    ],
    entryComponents:[
        TimeFrameModalsComponent
    ]
})

export class DashboardModule { }