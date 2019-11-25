import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'reset-password',
    templateUrl: './reset-password.component.html'
})

export class ResetPasswordComponent implements OnInit {

    myForm: FormGroup;
    isLoading: boolean;

    constructor(private fb: FormBuilder,
        private route: Router) {
        this.myForm = this.fb.group({
            newPassword: ['', Validators.required],
            confirmPassword: ['', Validators.required]
        })
    }

    ngOnInit() {
        const form = document.getElementById('resetForm');
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

    onSubmit() {
        this.isLoading = true;
        setTimeout(() => {
            this.isLoading = false;
            this.route.navigateByUrl('/login')
        }, 1000)
    }
}