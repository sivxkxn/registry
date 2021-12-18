import { Active, IUser } from 'src/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registers',
  templateUrl: './admin-registers.component.html',
  styleUrls: ['./admin-registers.component.scss']
})
export class AdminRegistersComponent implements OnInit {

  public register: IUser = {
    id: 1,
    fullName: 'Василь Петрович Кулулініч',
    email: 'kulinich@gmail.com',
    taxNumber:'768956789',
    password: 'kul999',
    organization: 'Vicikhovsky inc',
    isActive:Active.true
  };
  constructor() {}

  ngOnInit(): void {}
  public ELEMENT_DATA = [this.register];
  displayedColumns: string[] = [
    'fullName',
    'email',
    'taxNumber',
    'password',
    'organization',
    'isActive',
    'buttons'
  ];
  // displayedColumns: string[] =Object.keys(this.prisoner1);
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  router!: Router;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  // ngOnInit(): void {}
  onDelete(register: IUser) {
    // this.router.navigate(['profile']);
  }
  onEdit() {
    // this.router.navigate(['register-edit']);
  }
}
