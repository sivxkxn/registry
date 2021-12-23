import { Active, IUser } from 'src/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-registers',
  templateUrl: './admin-registers.component.html',
  styleUrls: ['./admin-registers.component.scss']
})
export class AdminRegistersComponent implements OnInit {
  // public register: IUser = {
  //   id: 1,
  //   fullName: 'Василь Петрович Кулулініч',
  //   email: 'kulinich@gmail.com',
  //   taxNumber:'768956789',
  //   password: 'kul999',
  //   organization: 'Vicikhovsky inc',
  //   isActive:Active.true,
  //   login:'Vasya'
  // };
  constructor(private generalService:GeneralService, private userService:UsersService, private router:Router) {}
  public ELEMENT_DATA: Array<IUser> = [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((arr) => {
      arr.forEach((user: IUser) => this.ELEMENT_DATA.push(user));
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns: string[] = [
    'fullName',
    'email',
    'taxNumber',
    'login',
    'password',
    'organization',
    'isActive',
    'buttons'
  ];
  dataSource = new MatTableDataSource<IUser>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onActivate(register: IUser) {
    register.isActive = Active.false;
    this.userService.updateUser(register);
  }
  onDeactivate(register: IUser){
    register.isActive = Active.true;
    this.userService.updateUser(register);
  }
  onEdit(register:IUser) {
    this.generalService.setRegisterEdit(register);
    this.router.navigate(['admin-register-edit']);
  }
} 
