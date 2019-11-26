import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CustomizationsComponent } from './customizations.component';

const route: Routes = [
    {
        path: '',
        component: CustomizationsComponent
    }
]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(route),
    ],
    declarations: [
        CustomizationsComponent,
    ]
})

export class CustomizationsModule { }