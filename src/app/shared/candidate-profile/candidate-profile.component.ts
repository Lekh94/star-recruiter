import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: 'candidate-profile',
    templateUrl: './candidate-profile.component.html'
})

export class CandidateProfileComponent implements OnInit {

    @Input('activeTab') activeTab: any;
    
    ngOnInit() { }
}