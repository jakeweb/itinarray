import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Router } from '@angular/router';

import { VALIDATOR_CONFIG } from '../shared/config/validator.config';
import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {


  model: any = {
    username: ''
  };
  loading: boolean = false;
  msg: string = '';

  formSignUp: FormGroup;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    public toastr: ToastsManager,
    vcr: ViewContainerRef
  ) {

    this.toastr.setRootViewContainerRef(vcr);

    this.formSignUp = fb.group({
      "name": ["",
        [
          Validators.required,
          Validators.minLength(VALIDATOR_CONFIG.name.minLength),
          Validators.maxLength(VALIDATOR_CONFIG.name.maxLength),
          Validators.pattern(VALIDATOR_CONFIG.name.pattern)
        ]
      ],
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
      ],
      "confirmPassword": ["",
        [
          Validators.required
        ]
      ]
    });

  }

  signUp() {
    this.loading = true;
    this.authService.signUp(this.model).subscribe(
      data => {
        this.model = {};
        this.loading = false;
        this.toastr.success("User created!");
        this.router.navigate(['/login']);
      },
      error => {
        this.loading = false;
        this.errorHandler(error);
      }
    );
  }

  private errorHandler(errorObject) {

    let errorMessage = '';
    if (errorObject.name && errorObject.name == "ValidationError") {
      for (let prop in errorObject.errors) {
        errorMessage = prop + ' ' + errorObject.errors[prop].value + ' already used';
        this.toastr.error(errorMessage);
      }
    }
    else {
      this.toastr.error(errorObject);
    }
  }


}
