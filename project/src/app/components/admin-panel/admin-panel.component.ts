import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Active } from 'src/interfaces';
import { GeneralService } from 'src/app/services/general.service';
import { IUser } from 'src/interfaces';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  isCreate = false;
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
    // if (this.generelService.getRegisterEdit()) {
    //   this.register = this.generelService.getRegisterEdit();
    // }
    this.fullForm = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl(''),
      email: new FormControl(''),
      taxNumber: new FormControl(''),
      password: new FormControl(''),
      organization: new FormControl(''),
      isActive: new FormControl(''),
      login: new FormControl(''),
    });
  }
  onToggle() {
    this.router.navigate(['admin-registers']);
  }
  onSave() {
    console.log(this.fullForm.value);
    let user: IUser = this.fullForm.value;
    this.userService.createUsers(user);
    this.isCreate = true;
  }
}
