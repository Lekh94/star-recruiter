import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { jobMenu } from 'src/app/dashboard/job-detail/jobMenus';
import { DataService } from '../services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})

export class AppHeaderComponent implements OnInit {

    jobMenus: any = jobMenu;
    jobId: string;
    showLogo: boolean;

    constructor(private route: Router,
        private dataService: DataService) { }

    ngOnInit() {
        this.jobId = this.route.url.split('/')[3];
        this.dataService.logo.subscribe((response: any) => this.showLogo = response);
    }

    logout() {
        this.route.navigateByUrl('/login')
    }
}