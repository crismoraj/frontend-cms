import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../models/page';
import { global } from './global';

@Injectable()
export class PageService implements OnInit {
    public url: string;

    constructor(public _http: HttpClient) {
        this.url = global.url;
    }

    ngOnInit(): void {
        this.getPages();
    }

    getPages(): Observable<any> {

        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.get(this.url + 'admin/pages', { headers: headers });
    }

    loadPage(page): Observable<any> {

        let params = JSON.stringify(page);
        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );

        return this._http.post(this.url + 'admin/pageload', params, { headers: headers });
    }

}