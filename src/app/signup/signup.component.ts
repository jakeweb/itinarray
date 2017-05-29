import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { VALIDATOR_CONFIG } from '../shared/config/validator.config';
import { AuthService } from '../shared/auth/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  model: any = {};
  formSignUp: FormGroup;
  errorMsg: any;
  isError: boolean = false;

  constructor(
    fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {

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
    this.authService.signUp(this.model).subscribe(
      data => {
        this.model = {};
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.errorMsg = error;
        this.isError = true;
      }
    );
  }


}
