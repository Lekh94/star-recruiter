import { Component, OnInit } from "@angular/core";
import { DataService } from 'src/app/shared/services/data.service';

@Component({
    selector: 'administration-template',
    templateUrl: 'administration.component.html'
})

export class AdministrationComponent implements OnInit {

    sidebarNavs: any[] = [];

    constructor(private dataService: DataService) {
        this.sidebarNavs = [
            { label: 'Overview', link: '/administration/overview' },
            { label: 'Jobs', link: '/administration/jobs' },
            // { label: 'Users & Roles', link: '/administration/users-roles' },
            { label: 'Customizations', link: '/administration/customizations' },
            // { label: 'Settings', link: '/administration/settings' }
        ]
    }

    ngOnInit() {
        this.dataService.isLogo(true)
     }
}