import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as shared from '../shared/shared';


@Injectable({
  providedIn: 'root'
})
export class EmailService {
  basicUrl = environment.basicUrl;
  headers = shared.headers;
  headers2 = shared.headers2;

  constructor(private http: HttpClient) { }

  getList() {
    return this.http.get(this.basicUrl + "/doctors", { 'headers': this.headers })
  }
}
