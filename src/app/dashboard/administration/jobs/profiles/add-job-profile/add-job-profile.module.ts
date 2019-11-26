import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HotTableModule } from '@handsontable/angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AddJobProfileComponent } from './add-job-profile.component';


const route: Routes = [
    {
        path: '',
        component: AddJobProfileComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        HotTableModule,
        NzIconModule,
        NzButtonModule
    ],
    declarations: [AddJobProfileComponent]
})

export class AddJobProfileModule { }