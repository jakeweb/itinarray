import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

import { ApiService } from '../api/api.service';
import { API_CONFIG } from '../api/api.config';

@Injectable()
export class AuthService {

    constructor(
        private http: Http,
        private router: Router,
        private apiService: ApiService,
    ) { }

    private apiConfig = API_CONFIG;

    isLoggedIn() {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }

    getCurrentUser() {
        return this.apiService.get(this.apiConfig.user);
    }

    logout() {
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }

    signIn(data: any) {
        return this.apiService.post(this.apiConfig.login, data);
    }

    signUp(model: any) {
        return this.apiService.post(this.apiConfig.signup, model);
    }
}