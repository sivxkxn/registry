import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { GeneralService } from 'src/app/services/general.service';
import { PrisonerService } from 'src/app/services/prisoner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-edit',
  templateUrl: './register-edit.component.html',
  styleUrls: ['./register-edit.component.scss'],
})
export class RegisterEditComponent implements OnInit {
  fullForm!: FormGroup;

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
  isCreate = false;
  public prisoner1: IPrisoner = {
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
  prisoner!: IPrisoner;
  constructor(
    public generalService: GeneralService,
    private prisonerService: PrisonerService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    if (this.generalService.getPrisoner()) {
      this.prisoner = this.generalService.getPrisoner();

    }
    this.fullForm = new FormGroup({
      id: new FormControl(this.prisoner.id),
      fullName: new FormControl(this.prisoner.fullName),
      dateOfBirth: new FormControl(this.prisoner.dateOfBirth),
      taxNumber: new FormControl(this.prisoner.taxNumber),
      registartionCode: new FormControl(this.prisoner.registartionCode),
      caseNumber: new FormControl(this.prisoner.caseNumber),
      live: new FormControl(this.prisoner.live),
      gender: new FormControl(this.prisoner.gender),
      dateOfTrial: new FormControl(this.prisoner.dateOfTrial),
      from: new FormControl(this.prisoner.from),
      till: new FormControl(this.prisoner.till),
      reason: new FormControl(this.prisoner.reason),
      article: new FormControl(this.prisoner.article),
      trial: new FormControl(this.prisoner.trial),
      benefits: new FormControl(this.prisoner.benefits),
      disease: new FormControl(this.prisoner.disease),
    });
  }
  onToggle() {
    this.router.navigate(['/register-prisoners']);
  }

  onSave() {
    console.log(this.fullForm.value);
    let newPrisoner: IPrisoner = this.fullForm.value;
    this.prisonerService.updatePrisoner(newPrisoner);
    this.isCreate =true;
  }
}
