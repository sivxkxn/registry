import { Component, OnInit } from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  
  constructor(public generalService:GeneralService) { }
   user: any;
  ngOnInit(): void {
    this.user = this.generalService.getUser();
    console.log( this.user);
  }
  onExit(){
    this.generalService.setUser(null);
  }
  ngOnChange(){ }

}
