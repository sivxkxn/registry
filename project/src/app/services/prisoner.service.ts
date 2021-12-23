import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IPrisoner } from 'src/interfaces';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PrisonerService {
  private url = 'http://localhost:3000/prisoners';

    private httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      })
  };

  constructor(private http: HttpClient) {}

  getPrisoners() {
    return this.http.get<Array<IPrisoner>>(this.url);
  }

  createPrisoners(prisoner: IPrisoner) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<IPrisoner>(this.url, JSON.stringify(prisoner), { headers: myHeaders }).subscribe(() => {console.log('try to create')});
  }

  updatePrisoner(prisoner: IPrisoner) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<IPrisoner>(this.url + "/" + prisoner.id, JSON.stringify(prisoner),  { headers: myHeaders }).subscribe(() => {console.log('try to update')});
  }
  
  deletePrisoners(id: string) {
    return this.http.delete(this.url + "/" + id, this.httpOptions).subscribe(data => {console.log(data)});
  }
}
