import { Component, OnInit, Input } from "@angular/core";
import { Candidates } from 'src/app/shared/candidates';

@Component({
    selector: 'table-list',
    templateUrl: './table.component.html'
})

export class TableComponent implements OnInit {

    @Input('columns') tableHeader: any;

    tableColumn: any[] = [];
    candidates: any = Candidates;

    ngOnInit() {
        this.tableColumns();
    }

    tableColumns() {
        switch (this.tableHeader) {
            case 'candidates': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Experience', slug: 'experience' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Ratings', slug: 'rating' }
                ];
                break;
            }
            case 'decline': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Role', slug: 'role' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Joining Date', slug: 'joining' },
                    { name: 'Decline', slug: 'decline' }
                ];
                break;
            }
            case 'joined': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Role', slug: 'role' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Joining', slug: 'joining' },
                    { name: 'Rating', slug: 'rating' }
                ];
                break;
            }
            case 'rejected': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Role', slug: 'role' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Rejected', slug: 'rejected' },
                    { name: 'Rating', slug: 'rating' }
                ];
                break;
            }
            case 'offers': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Role', slug: 'role' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Offers', slug: 'joining' },
                    { name: 'Joining', slug: 'joining' }
                ];
                break;
            }
            case 'talentPool': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Experience', slug: 'experience' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Rating', slug: 'rating' }
                ];
                break;
            }
            case 'reports': {
                this.tableColumn = [
                    { name: 'Name', slug: 'name' },
                    { name: 'Email Address', slug: 'email' },
                    { name: 'Phone', slug: 'phone' },
                    { name: 'Experience', slug: 'experience' },
                    { name: 'Skills', slug: 'skills' },
                    { name: 'Rating', slug: 'rating' }
                ];
                break;
            }
        }
    }

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
}