import { Active, IUser } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-register-edit',
  templateUrl: './admin-register-edit.component.html',
  styleUrls: ['./admin-register-edit.component.scss'],
})
export class AdminRegisterEditComponent implements OnInit {
  public register: IUser = {
    id: 1,
    fullName: 'Василь Петрович Кулулініч',
    email: 'kulinich@gmail.com',
    taxNumber: '768956789',
    password: 'kul999',
    organization: 'Vicikhovsky inc',
    isActive: Active.true,
  };
  constructor() {}

  ngOnInit(): void {}
  public isActive = Active;

  onSave() {}
}
