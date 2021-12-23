import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { GeneralService } from 'src/app/services/general.service';
import { IPrisoner } from 'src/interfaces';
import { PrisonerService } from 'src/app/services/prisoner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.scss']
})
export class RegisterPanelComponent implements OnInit {

  formForNewPrisoner!: FormGroup;
  isCreate = false;
  fullName!: FormControl;
  dateOfBirth!: FormControl;
  taxNumber!: FormControl;
  registartionCode!: FormControl;
  caseNumber!: FormControl;
  live!: FormControl;
  gender!: FormControl;
  dateOfTrial!: FormControl;
  from!: FormControl;
  till!: FormControl;
  reason!: FormControl;
  article!: FormControl;
  trial!: FormControl;
  benefits!: FormControl;
  disease!: FormControl;

  notCorrect: string = '';
  isOK: string = 'Зміни успішно збережені';
  prisoner!: IPrisoner;
  constructor(
    public generalService: GeneralService,
    private prisonerService: PrisonerService,
    private router: Router,
  ) { }


  ngOnInit(): void {
    this.formForNewPrisoner = new FormGroup({
      id: new FormControl(''),
      fullName: new FormControl('',  [Validators.required, Validators.minLength(10)],),
      dateOfBirth: new FormControl('', [Validators.required]),
      taxNumber: new FormControl('', [Validators.required, Validators.pattern('\d\d\d\d\d\d\d\d\d\d')]),
      registartionCode: new FormControl('', [Validators.required, Validators.pattern('\d\d\d\d\d\d\d\d\d\d')]),
      caseNumber: new FormControl('', [Validators.required, Validators.pattern('\d\d\d\/\d\d\d\d\/\d\d')]),
      live: new FormControl('', [Validators.required]),
      gender: new FormControl('',  [Validators.required]),
      dateOfTrial: new FormControl('',  [Validators.required]),
      from: new FormControl('',  [Validators.required]),
      till: new FormControl('',  [Validators.required]),
      reason: new FormControl('', [Validators.required]),
      article: new FormControl('',  [Validators.required, Validators.pattern('\d+')]),
      trial: new FormControl('', Validators.required),
      benefits: new FormControl(''),
      disease: new FormControl(''),
    });
  }
  onToggle() {
    // this.router.navigate(['/register-prisoners']);
  }

  onSave() {
    console.log(this.formForNewPrisoner.value);
    let newPrisoner: IPrisoner = this.formForNewPrisoner.value;
    this.prisonerService.createPrisoners(newPrisoner);
    this.isCreate =true;
  }
}
