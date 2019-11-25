import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardDataComponent } from './dashboard-data.component';


import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js/dist/plotly.js';
import { CommonModule } from '@angular/common';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

PlotlyModule.plotlyjs = PlotlyJS;


const route: Routes = [
    {
        path: '',
        component: DashboardDataComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        PlotlyModule,
        NzIconModule,
        NzButtonModule
    ],
    declarations: [DashboardDataComponent]
})

export class DashboardDataModule { }