import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  login!: FormControl;
  password!: FormControl;
  fullForm!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.login = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.login.valueChanges.subscribe((value) => console.log(value));
    this.fullForm = new FormGroup({
      login: new FormControl(),
      password: new FormControl(),
    });
  }
}
