import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

// const ELEMENT_DATA: PeriodicElement[] = [
//   {taxNumber:74366736254, name:"Іван Петрович Лужний", caseNumber:674623783},
//   {taxNumber:2492347857, name:"Артем Іванивич Прудніков", caseNumber:372642},
//   {taxNumber:6476257345, name:"Василь Семенович Ліхошва", caseNumber:82467326},
//   ];

export interface PeriodicElement {
  taxNumber: string;
  fullName: string;
  caseNumber: string;
}

@Component({
  selector: 'app-register-prisoners',
  templateUrl: './register-prisoners.component.html',
  styleUrls: ['./register-prisoners.component.scss'],
})
export class RegisterPrisonersComponent implements OnInit {
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
  public prisoner2: IPrisoner = {
    id: 2,
    fullName: 'Григорій Іванович Сковорода',
    dateOfBirth: new Date('December 17, 1995'),
    taxNumber: '9358567',
    registartionCode: '64839674',
    caseNumber: '432647264538',
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
  public ELEMENT_DATA = [this.prisoner1];
  constructor() {}
  displayedColumns: string[] = [
    'taxNumber',
    'fullName',
    'caseNumber',
    'buttons',
  ];
  // displayedColumns: string[] =Object.keys(this.prisoner1);
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  router!: Router;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {}
  onDelete(prisoner: IPrisoner) {
    // this.router.navigate(['profile']);
  }
  onEdit() {
    this.router.navigate(['register-edit']);
  }
}
