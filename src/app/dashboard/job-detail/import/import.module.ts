import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ImportFileComponent } from './import.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


const route: Routes = [
    {
        path: '',
        component: ImportFileComponent        
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        NzIconModule,
        NzButtonModule
    ],
    declarations: [ImportFileComponent]
})

export class ImportFileModule { }