import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html'
})

export class ForgotPasswordComponent implements OnInit {

    myForm: FormGroup;
    isLoading: boolean;

    constructor(private fb: FormBuilder,
        private route: Router){
        this.myForm = this.fb.group({
            email: ['', Validators.required]
        })
    }

    ngOnInit() { 
        const form = document.getElementById('passwordForm');
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
        setTimeout(()=>{
            this.isLoading = false;
            this.route.navigateByUrl('/reset-password');
        },1000)
    }

    onCancel() {
        this.route.navigateByUrl('/login');
    }
}