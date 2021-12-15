import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public arr =[{h:789}, {k:"8"}];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  onToggle(){
    // this.dataService.writeData('prisoners.json', this.arr);
  }

}
