import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardSkip implements CanActivate {

    constructor(private router: Router) { }

    canActivate() {

        if (!localStorage.getItem('token')) {
            return true;
        }
        else {
            this.router.navigate(['/admin/dashboard']);
            return false;
        }

    }
}