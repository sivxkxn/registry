import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrls: ['./register-edit.component.scss'],
})
export class RegisterEditComponent implements OnInit {
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
    benefits:Benefits.false,
    disease:'немає'
  };
  constructor() {}

  ngOnInit(): void {}

  onSave() {}
}
