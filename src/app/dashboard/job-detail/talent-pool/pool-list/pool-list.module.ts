import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { NzButtonModule, NzIconModule } from 'ng-zorro-antd';
import { PoolListComponent } from './pool-list.component';


const route: Routes = [
    {
        path: '',
        component: PoolListComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        SharedModule,
        NzButtonModule,
        NzIconModule
    ],
    declarations: [ PoolListComponent ]
})

export class PoolListModule { }