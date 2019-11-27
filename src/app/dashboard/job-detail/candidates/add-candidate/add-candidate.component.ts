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
    skillList: any[] = ['Angular', 'Stack', 'Java', 'HTML', 'CSS', 'Java Script', 'Photoshop', 'Design', 'Development'];
    selectedSkills: any[] = [];
    filterSkills: any[] = [];

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

    ngOnInit() {
        this.filterSkills = this.skillList;
    }

    candidatesList() {
        // this.isLoading = true;
        // let url = this.router.url.replace('add', 'all');
        // this.router.navigateByUrl(url);
        console.log('this.candidateForm', this.candidateForm.value)
    }

    preventDefault(event) {
        event.stopPropagation();
    }

    addSkills(event) {
        let control = this.candidateForm.get('skills');
        if (event.target.checked === true) this.selectedSkills.push(event.target.name);
        else this.selectedSkills = this.selectedSkills.filter((data) => data != event.target.name);
        control.setValue(this.selectedSkills);
    }

    removeSkill(skill) {
        let control = this.candidateForm.get('skills');
        this.selectedSkills = this.selectedSkills.filter((data) => data != skill);
        control.setValue(this.selectedSkills);
    }

    hasSkill(skill) {
        if (this.selectedSkills) return this.selectedSkills.find((data) => data === skill) ? true : false;
    }

    searchSkills(event) {
        let searchData = this.filterSkills;
        let search = event.target.value;
        search = search.toLowerCase();
        if (search) {
            searchData = searchData.filter((data) => {
                return data.toLowerCase().trim().indexOf(search) != -1;
            });
            this.skillList = searchData;
        } else this.skillList = this.filterSkills;
    }
}