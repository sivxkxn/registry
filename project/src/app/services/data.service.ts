// import { writeJsonFile } from 'write-json-file';
import * as fs from 'fs'

import { Injectable } from '@angular/core';

// const fs = require('fs');
const path = require('path');

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getAllPrisoners() {}

  // async write(filePath:string, objects:Array<Object>):Promise<any>{
  //   await writeJsonFile( filePath, objects);
  // }
  readData(path: string, data: Array<Object>) {}
  writeData(path: string, data: Array<Object>) {
    let uri = "data:application/json;charset=UTF-8," + encodeURIComponent( JSON.stringify(data));
  }
}
// let f=[{f:"fff"}, {h:12}];
// let w =new DataService();
// w.write('prisoners.json', f).then(()=>console.log('done'));
