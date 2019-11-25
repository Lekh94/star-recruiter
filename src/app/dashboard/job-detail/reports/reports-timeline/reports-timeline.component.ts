import { Component, OnInit } from "@angular/core";
import { Candidates } from 'src/app/shared/candidates';

@Component({
    selector: 'report-timeline',
    templateUrl: './reports-timeline.component.html'
})

export class ReportTimelineComponent implements OnInit {

    candidates:any = Candidates;

    ngOnInit() { }
}