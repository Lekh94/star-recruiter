import { Component, OnInit } from "@angular/core";

@Component({
    selector: '',
    templateUrl: './job-profiles.component.html'
})

export class ProfilesListComponent implements OnInit {

    data = [
        ['12', 'IOS Developer'],
        ['13', 'Android Developer'],
        ['14', 'Full Stack Developer'],
        ['15', 'Backend Developer']
    ];

    ngOnInit() { }
}