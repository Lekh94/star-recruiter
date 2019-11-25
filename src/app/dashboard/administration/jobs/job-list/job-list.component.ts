import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'jobs-list',
    templateUrl: './job-list.component.html'
})

export class JobListComponent implements OnInit {

    constructor(private router: Router) { }

    data = [
        ['12', 'IOS Developer'],
        ['13', 'Android Developer'],
        ['14', 'Full Stack Developer'],
        ['15', 'Backend Developer']
    ];

    ngOnInit() {
        console.log('data',this.data)
     }

    
   
    addJob() {
        this.router.navigateByUrl('/administration/jobs/add-job')
    }
}