import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable()
export class UserService {
    public url: string;
    public identity;
    public token;

    constructor(private _http: HttpClient) {
        this.url = global.url;
    }

    register(user): Observable<any> {
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this._http.post(this.url + 'admin/register', params, { headers: headers });
    }

    signup(user, gettoken = null): Observable<any> {
        if (gettoken != null) {
            user.gettoken = true;
        }

        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this._http.post(this.url + 'admin/login', params, { headers: headers });
    }

    getIdentity() {
        let identity = JSON.parse(localStorage.getItem('identity'));
        if (identity && identity != null && identity != "undefined" && identity != undefined) {
            this.identity = identity;
        } else {
            this.identity = null;
        }

        return this.identity;
    }

    getToken() {
        let token = localStorage.getItem('token');
        if (token && token != null && token != "undefined" && token != undefined) {
            this.token = token;
        } else {
            this.token = null;
        }

        return this.token;
    }

}