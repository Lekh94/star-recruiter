import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'jobs-profiles',
    templateUrl: './profiles.component.html'
})

export class JobProfilesComponent implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() { }
}