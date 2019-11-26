import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'job-openings',
    templateUrl: './openings.component.html'
})

export class JobOpeningsComponent implements OnInit {

    constructor(private router: Router) { }

    data = [
        ['12', 'IOS Developer'],
        ['13', 'Android Developer'],
        ['14', 'Full Stack Developer'],
        ['15', 'Backend Developer']
    ];

    ngOnInit() { }
}