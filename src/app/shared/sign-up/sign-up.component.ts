import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: 'sign-up.component.html'
})

export class SignUpComponent implements OnInit {

    myForm: FormGroup;
    isLoading: boolean;

    constructor(private fb: FormBuilder,
        private route: Router) {
        this.myForm = this.fb.group({
            companyName: ['', Validators.required],
            registeredName: ['', Validators.required],
            companyEmail: ['', Validators.required],
            companyPhone: ['', Validators.required],
            address: ['', Validators.required],
            landmark: ['', Validators.required],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zipCode: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: [''],
            email: ['', Validators.required],
            phone: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
            confirmPassword: ['', Validators.required]
        })
    }

    ngOnInit() {
        this.focusEvents();
    }

    onSubmit() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.route.navigateByUrl('/')
        }, 1000)
    }

    focusEvents() {
        const form = document.getElementById('loginForm');

        form.addEventListener('focusin', (event) => {
            let element = event.target as HTMLElement;
            element.nextElementSibling.classList.add('active');
        });

        form.addEventListener('focusout', (event) => {
            let element = event.target as HTMLElement;
            if ((event.target as HTMLInputElement).value) element.nextElementSibling.classList.add('active');
            else element.nextElementSibling.classList.remove('active');
        });
    }
}