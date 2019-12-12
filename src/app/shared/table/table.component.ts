import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Candidates } from 'src/app/shared/candidates';

@Component({
    selector: 'table-list',
    templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

    @Input('columns') tableColumns: any[];
    @Input('checkbox') nameWithCheckbox: boolean;
    @Output() candidateId : EventEmitter<any> = new EventEmitter();

    candidates: any = Candidates;

    ngOnInit() { }

    isRating(n: number) {
        let array = [];
        for (let i = 0; i < n; i++) {
            array.push(i)
        }
        return array;
    }

    emptyRating(n: number) {
        n = 5 - n;
        let array = [];
        for (let i = 0; i < n; i++) {
            array.push(i)
        }
        return array;
    }

    activeCandidate(id) {
        this.candidateId.emit('id');
        console.log('this.candidateId',this.candidateId)
    }
}