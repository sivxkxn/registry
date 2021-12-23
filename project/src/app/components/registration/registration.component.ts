import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { GeneralService } from 'src/app/services/general.service';
import { IUser } from 'src/interfaces';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  login!: FormControl;
  password!: FormControl;
  fullForm!: FormGroup;
  notCorrect: string = '';

  constructor(
    private userService: UsersService,
    private router: Router,
    private generalService: GeneralService
  ) {}

  ngOnInit(): void {
    this.fullForm = new FormGroup({
      login: new FormControl(''),
      password: new FormControl(''),
    });
    this.fullForm.valueChanges.subscribe(() => (this.notCorrect = ''));
  }
  onToggle() {
    let loginText = this.fullForm.get('login')?.value;
    let passwordText = this.fullForm.get('password')?.value;
    this.userService.getUsers().subscribe((y) =>
      y.forEach((x) => {
        if (x.login === loginText && x.password === passwordText) {
          this.generalService.setUser(x);
          this.router.navigate(['register-panel']);
        } else {
          let admin = this.userService.getAdmin();
          if (admin.login === loginText && admin.password === passwordText) {
            this.generalService.setUser(admin);
            this.router.navigate(['admin-registers']);
          } else {
            this.notCorrect = 'Логін чи пароль не є коректним';
          }
        }
      })
    );
  }
}
