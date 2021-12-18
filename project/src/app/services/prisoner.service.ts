import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IPrisoner } from 'src/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrisonerService {
  private url = 'http://localhost:3000/prisoners';
  constructor(private http: HttpClient) {}

  getPrisoners() {
    return this.http.get<Array<IPrisoner>>(this.url);
  }

  createPrisoners(prisoner: IPrisoner) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<IPrisoner>(this.url, JSON.stringify(prisoner), {
      headers: myHeaders,
    });
  }

  updatePrisoner(prisoner: IPrisoner) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<IPrisoner>(this.url, JSON.stringify(prisoner), {
      headers: myHeaders,
    });
  }

  deletePrisoners(id: string) {
    return this.http.delete<IPrisoner>(this.url + '/' + id);
  }
  
}
