import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';

const route: Routes = [
    {
        path: '',
        component: SettingsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    declarations: [
        SettingsComponent,
    ]
})

export class SettingsModule { }