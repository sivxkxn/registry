import { Component } from '@angular/core';
import { GeneralService } from './services/general.service';
import { MainPageComponent } from './components/main-page/main-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project';
  user:any;
  constructor(private generalService:GeneralService){}
  ngOnChange(){
    this.user = this.generalService.getUser();
  }
}
