import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TimelineComponent } from './timeline/timeline.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CandidateProfileComponent } from './candidate-profile/candidate-profile.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CandidateComponent } from './candidate/candidate.component';


@NgModule({
    imports: [
        CommonModule,
        NzButtonModule,
        NzIconModule,
    ],
    exports: [
        TableComponent,
        TimelineComponent,
        CandidateComponent,
        CandidateProfileComponent
    ],
    declarations: [
        TableComponent,
        TimelineComponent,
        CandidateComponent,
        CandidateProfileComponent
    ]
})

export class SharedModule { }