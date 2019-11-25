import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


const route: Routes = [
    {
        path: '',
        component: ReportListComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule
    ],
    declarations: [ReportListComponent]
})

export class ReportsListModule { }