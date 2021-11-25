import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of} from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  login!: FormControl;
  password!: FormControl;
  constructor() {}

  ngOnInit(): void {
    this.login = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.login.valueChanges.subscribe((value) => console.log(value));
  }
//   function myAsyncValidator(formControl: FormControl):Observable<any|null>{
//     if(formControl.value.length<3){
//       return Observable.of({regValidator: {message:"Це поле обов'язкове для заповнення"}});
//     }
//     return Observable.of(null);
//   }
//   submit() {}
// }
}