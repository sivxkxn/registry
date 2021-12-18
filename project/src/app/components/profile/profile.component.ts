import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public prisoner: IPrisoner = {
    id: 1,
    fullName: 'Петро Іванович Катригін',
    dateOfBirth: new Date('December 17, 1995'),
    taxNumber: '7865439',
    registartionCode: '64839674',
    caseNumber: '56564523453',
    live: 'Київ, Україна',
    gender: Gender.male,
    dateOfTrial: new Date('December 30, 2019'),
    from: new Date('December 31, 2020'),
    till: new Date('December 31, 2021'),
    reason: 'Крадіжка грошей',
    article: 'Стаття 185',
    trial: 'Голосіївський суд міста Києва',
    benefits: Benefits.false,
    disease: 'немає',
  };
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }
  onToggle(){
    // this.dataService.writeData('prisoners.json', this.arr);
  }

}
