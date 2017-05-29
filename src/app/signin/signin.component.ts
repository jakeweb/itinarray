import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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
    private authService: AuthService) {  }

  ngOnInit() {
    this.buildForm();
  }

  formSignIn: FormGroup;
  model: any = {};


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

    this.authService.signIn(this.model).subscribe(
      response => {
        this.model = {};
        localStorage.setItem('token', JSON.stringify(response));
        this.router.navigate(['/admin/dashboard']);
      },
      error => {
        console.log(error);
      });
  }
}

