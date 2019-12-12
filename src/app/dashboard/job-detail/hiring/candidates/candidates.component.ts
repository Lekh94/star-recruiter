import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'hiring-candidates',
    templateUrl: './candidates.component.html'
})

export class CandidatesComponent implements OnInit {

    tableColumns: any[] = [
        ['Name', 'name'],
        ['Email Address', 'email'],
        ['Phone', 'phone'],
        ['Experience', 'experience'],
        ['Skills', 'skills'],
        ['Rating', 'rating'],
        ['dropDown', '']
    ];
    nameWithCheckbox: boolean = true;

    ngOnInit() { }
}