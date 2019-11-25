import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { TimeFrameModalsComponent } from 'src/app/shared/modals/time-frame-modal/time-frame-modal';
import Handsontable from 'handsontable';
import { Candidates } from 'src/app/shared/candidates';

@Component({
    selector: 'candidates-list',
    templateUrl: './cadidates-list.component.html'
})

export class CandidatesListComponent implements OnInit {

    constructor(private router: Router,
        private modalService: NzModalService) { }

    ngOnInit() {
        this.handsomeTable();
    }

    addCandidate() {
        let url = this.router.url.replace('all', 'add');
        this.router.navigateByUrl(url)
    }

    handsomeTable() {
        let data = Candidates;
        let neData = []
        data.map((data) => {
            let obj = [data.name, data.email, data.phone, data.skills, data.role] 
            //, phone: data.phone, skills: data.skills, source: data.role }
            neData.push(obj)
        })
        let obj = ['', 'Name', 'Email Address', 'Phone', 'Skills', 'Source']
        // {name: 'Name', email: 'Email Address', phone: 'Phone', skills: 'Skills', source: 'Rating' }
        //['Name', 'Email Address', 'Phone', 'Skills', 'Source']
       
        neData.unshift(obj)
        console.log('neData', neData)
        let table = document.getElementById('table-data');
        new Handsontable(table, {
            data: neData,
            colWidths: 100,
            width: '100%',
            height: 320,
            rowHeights: 23,
            rowHeaders: true,
            colHeaders: true
        })
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
}