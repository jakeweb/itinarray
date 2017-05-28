import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { API_CONFIG } from './api.config';

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    private apiConfig = API_CONFIG;
    private apiPreff = API_CONFIG.apiPreff;

    get(url: string): Observable<any[]> {
        console.log("get:", url);
        return this.http.get(this.apiPreff + url, this.headersOptions())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }

    post(url: string, body?: any): Observable<any[]> {
        let bodyString = JSON.stringify(body);
        console.log("post:", url);
        return this.http.post(this.apiPreff + url, bodyString, this.headersOptions())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }

    put(url: string, body: any): Observable<any[]> {
        let bodyString = JSON.stringify(body);
        console.log("put:", url);
        return this.http.put(this.apiPreff + url, bodyString, this.headersOptions())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }

    delete(url: string): Observable<any[]> {
        console.log("delete:", url);
        return this.http.delete(this.apiPreff + url, this.headersOptions())
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
    }

    // private helper method
    private headersOptions() {
        let headers;
        let options;

        // set headers
        if (localStorage.getItem('currentUser')) {
            console.log('security request');

            let currentUser = JSON.parse(localStorage.getItem('currentUser'));
            let token = JSON.parse(localStorage.getItem('token'));

            headers = new Headers({
                'Content-Type': 'application/json',
                'Authorization': token
            });
        }
        else {
            headers = new Headers({ 'Content-Type': 'application/json' });
            console.log('primary request');
        }

        return headers;
    }
}
