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
        if (localStorage.getItem('currentUser')) {
            return true;
        }
        else {
            return false;
        }
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'))
    }

    logout() {
        return this.apiService.post(this.apiConfig.logout);
    }

    signIn(data: any) {
        return this.apiService.post(this.apiConfig.signin, data);
    }

    signUp(model: any) {
        return this.apiService.post(this.apiConfig.signup, model);
    }
}