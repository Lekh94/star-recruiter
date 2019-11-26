import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'add-candidate',
    templateUrl: './add-candidate.component.html'
})

export class AddCandidateComponent implements OnInit {

    candidateForm: FormGroup;
    isLoading: boolean;

    constructor(private router: Router,
        private fb: FormBuilder) {
        this.candidateForm = this.fb.group({
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            phone2: [''],
            skills: ['', Validators.required],
            currentSalary: [''],
            expectedSalary: [''],
            noticePeriod: [''],
            experience: ['', Validators.required],
            source: ['', Validators.required],
            dob: ['', Validators.required],
            address: [''],
            landmark: [''],
            city: [''],
            state: [''],
            pinCode: [''],
        })
    }

    ngOnInit() { }

    candidatesList() {
        this.isLoading = true;
        let url = this.router.url.replace('add', 'all');
        this.router.navigateByUrl(url);
    }
}