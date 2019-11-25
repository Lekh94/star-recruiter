import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NzModalService } from 'ng-zorro-antd';
import { TimeFrameModalsComponent } from 'src/app/shared/modals/time-frame-modal/time-frame-modal';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
declare var Plotly: any

@Component({
    selector: 'dashboard-data',
    templateUrl: './dashboard-data.component.html'
})

export class DashboardDataComponent implements OnInit {

    graph: any;
    @Output() private showModal: any = new EventEmitter<any>();;

    constructor(private modalService: NzModalService,
        private router: Router,
        private dataService: DataService) { }

    ngOnInit() {
        this.dataService.isLogo(true)

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
        let garphData1 = {
            x: months,
            y: [3, 4, 4, 5, 6, 4, 2, 8, 6, 7, 8, 9],
            name: 'Naukri',
            type: 'scatter',
            mode: 'lines',
            marker: { color: '#184bb8' }
        }
        let garphData2 = {
            x: months,
            y: [1, 1, 2, 4, 5, 2, 1, 5, 7, 9, 9, 7],
            name: 'Instahyre',
            type: 'scatter',
            mode: 'lines',
            marker: { color: '#5585e9' }
        }
        this.graph = {
            data: [garphData1, garphData2],
            layout: { height: 350 }
        };
    }

    showTimeFrame() {
        this.modalService.create({
            nzTitle: 'Select Time Frame',
            nzContent: TimeFrameModalsComponent,
            nzFooter: [
                {
                    label: 'OK',
                    type: 'success',
                    onClick: () => {
                        this.modalService.closeAll()
                    }
                },
                {
                    label: 'Cancel',
                    type: 'danger',
                    onClick: () => this.modalService.closeAll()
                },
            ]
        });
    }

    addJob() {
        this.router.navigateByUrl('/administration/jobs/add-job');
    }
}