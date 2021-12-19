import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IUser } from 'src/interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url = 'http://localhost:3000/registers';
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Array<IUser>>(this.url);
  }

  createUsers(User:  IUser ) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post< IUser >(this.url, JSON.stringify(User), {
      headers: myHeaders,
    });
  }

  updateUser(User: IUser ) {
    const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.put<IUser>(this.url, JSON.stringify(User), {
      headers: myHeaders,
    });
  }

  deleteUsers(id: string) {
    return this.http.delete<IUser>(this.url + '/' + id);
  }
  
  getAdmin(){
    return {login:'Julia', password:'123456'}
  }
}
