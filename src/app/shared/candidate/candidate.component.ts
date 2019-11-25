import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'candidate',
    templateUrl: './candidate.component.html'
})

export class CandidateComponent implements OnInit {

    @Input('tab') tab:any;

    ngOnInit() {
        console.log('screen',this.tab)
     }
}