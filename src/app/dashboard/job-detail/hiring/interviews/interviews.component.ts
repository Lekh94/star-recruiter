import { Component, OnInit, SimpleChange } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector: 'interviews',
    templateUrl: './interviews.component.html'
})

export class InterviewsComponent implements OnInit {

    tableColumns: any[] = [
        ['Name', 'name'],
        ['Email Address', 'email'],
        ['Phone', 'phone'],
        ['Experience', 'experience'],
        ['Skills', 'skills'],
        ['Rating', 'rating']
    ];
    nameWithCheckbox: boolean = false;
    activeSection: any = 'interviews';
    id: any;

    constructor(private router: Router) { }

    ngOnInit() {
        console.log('router', this.router.url)
    }

    activeCandiate(id) {
        console.log('id --', id)
        this.id = id;
    }

    ngOnChanges(changes: SimpleChange) {
        console.log('changes', changes);
    }
}