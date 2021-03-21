import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from '../models/menu';
import { global } from './global';

@Injectable()
export class MenuService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = global.url;
    }

    getMenuSuperior(menu): Observable<any> {
        let params = JSON.stringify(menu);
        let headers = new HttpHeaders().set(
            'Content-Type',
            'application/json'
        );
        return this._http.post(this.url + 'admin/menus', params, { headers: headers });
    }

}