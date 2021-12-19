import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit } from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
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
  constructor(
    private router: Router,
    private generalService: GeneralService
  ) {}

  prisoner: IPrisoner = this.prisoner1;

  ngOnInit(): void {
    if (this.generalService.getPrisoner()) {
      for (let field in this.prisoner) {
        if (field === 'dateOfTrial' || field === 'from' || field === 'till') {
          this.prisoner[field] = new Date(this.prisoner[field]);
        }
      }
    } else {
      this.generalService.getPrisoner();
    }
  }

  onToggle() {
    this.router.navigate(['/search']);
  }
}
