import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview.component';

const route: Routes = [
    {
        path: '',
        component: OverviewComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    declarations: [
        OverviewComponent,
    ]
})

export class OverviewComponentModule { }