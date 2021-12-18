// import { writeJsonFile } from 'write-json-file';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// const fs = require('fs');
const path = require('path');
const fs = require('fs');

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data) => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  public writeJSON(data:any): void {
    fs.writeFileSync( path.resolve('./assets/data/data.json'), JSON.stringify(data));
  }
}
