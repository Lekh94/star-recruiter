import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'job-detail',
    templateUrl: './job-detail.component.html'
})

export class JobDetailComponent implements OnInit {

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.isLogo(false)
    }
}