import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../_services';
import {NzMessageService} from "ng-zorro-antd/message";

@Component({ templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private message: NzMessageService,
        private authenticationService: AuthenticationService
    ) {
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit(): any {
        this.loginForm = this.formBuilder.group({
            username: ['akincior@gmail.com', Validators.required],
            password: ['rasmuslerdorf', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f(): any { return this.loginForm.controls; }

    doLogin(): any {
        const msgId = this.message.loading('Logging in, please wait..', { nzDuration: 0 }).messageId;
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    // get return url from route parameters or default to '/'
                    this.message.remove(msgId);
                    const returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
                    this.router.navigate([returnUrl]);
                },
                error: error => {
                    this.message.remove(msgId);
                    this.error = error;
                    this.loading = false;
                }
            });
    }
}
