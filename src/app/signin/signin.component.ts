import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

import { VALIDATOR_CONFIG } from '../shared/config/validator.config';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  moduleId: module.id,
  selector: 'app-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['signin.component.css']
})


export class SigninComponent implements OnInit {


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastsManager,
    vcr: ViewContainerRef,
    private authService: AuthService) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.buildForm();
  }

  formSignIn: FormGroup;
  model: any = {};
  loading: boolean = false;



  buildForm(): void {
    this.formSignIn = this.fb.group({
      "email": ["",
        [
          Validators.required,
          Validators.minLength(VALIDATOR_CONFIG.email.minLength),
          Validators.maxLength(VALIDATOR_CONFIG.email.maxLength),
          Validators.pattern(VALIDATOR_CONFIG.email.pattern)
        ]
      ],
      "password": ["",
        [
          Validators.required,
          Validators.minLength(VALIDATOR_CONFIG.password.minLength),
          Validators.maxLength(VALIDATOR_CONFIG.password.maxLength),
          Validators.pattern(VALIDATOR_CONFIG.password.pattern)
        ]
      ]
    });
  }


  signIn() {
    this.loading = true;

    this.authService.signIn(this.model).subscribe(
      response => {
        this.model = {};
        this.loading = false;
        // localStorage.setItem('token', JSON.stringify(response));
        // localStorage.setItem('currentUser', JSON.stringify(response));
        this.router.navigate(['/admin/dashboard']);
      },
      error => {
        this.loading = false;
        this.toastr.error(error);
        console.log(error);
      });
  }
}

