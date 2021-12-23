import { Active, IUser } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-register-edit',
  templateUrl: './admin-register-edit.component.html',
  styleUrls: ['./admin-register-edit.component.scss'],
})
export class AdminRegisterEditComponent implements OnInit {
  // public register: IUser = {
  //   id: 1,
  //   fullName: 'Василь Петрович Кулулініч',
  //   email: 'kulinich@gmail.com',
  //   taxNumber: '768956789',
  //   password: 'kul999',
  //   organization: 'Vicikhovsky inc',
  //   isActive: Active.true,
  //   login:'Vasya'
  // };
  isCreate =false;
  Active = Active;
  register!: IUser;
  fullForm!: FormGroup;
  id!: FormControl;
  fullName!: FormControl;
  email!: FormControl;
  taxNumber!: FormControl;
  password!: FormControl;
  organization!: FormControl;
  isActive!: FormControl;
  login!: FormControl;

  notCorrect: string = '';
  isOK: string = 'Зміни успішно збережені';
  
  constructor(
    private generelService: GeneralService,
    private router: Router,
    private userService: UsersService
  ) {}

  ngOnInit(): void {
    if (this.generelService.getRegisterEdit()) {
      this.register = this.generelService.getRegisterEdit();
    }
    this.fullForm = new FormGroup({
      id: new FormControl(this.register.id),
      fullName: new FormControl(this.register.fullName),
      email: new FormControl(this.register.email),
      taxNumber: new FormControl(this.register.taxNumber),
      password: new FormControl(this.register.password),
      organization: new FormControl(this.register.organization),
      isActive: new FormControl(this.register.isActive),
      login: new FormControl(this.register.login),
    });
  }
  onToggle() {
    this.router.navigate(['admin-registers']);
  }
  onSave() {
    console.log(this.fullForm.value);
    let userEdited: IUser = this.fullForm.value;
    this.userService.updateUser(userEdited);
    this.isCreate = true;
  }
}
