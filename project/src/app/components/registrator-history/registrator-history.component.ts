import { ActionEnum, IPrisonerLog, prisonerUkr } from 'src/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrator-history',
  templateUrl: './registrator-history.component.html',
  styleUrls: ['./registrator-history.component.scss'],
})
export class RegistratorHistoryComponent implements OnInit {
  actionType = ActionEnum;
  logData: IPrisonerLog = {
    id: 1,
    registerName: 'Петро Іванович Кулік',
    prisonerName: 'Іванов Григорович Твірський',
    type: this.actionType.modifi,
    date: new Date('02.02.2021'),
    fieldName: prisonerUkr.reason,
    oldValue: 'Крадіжка',
    newValue: 'Крадіжка у крупних маштабах',
  };
  public ELEMENT_DATA = [this.logData, this.logData];
  constructor() {}
  displayedColumns: string[] = [
    'registerName',
    'prisonerName',
    'type',
    'date',
    'fieldName',
    'oldValue',
    'newValue',
  ];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  router!: Router;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {}
  onDelete() {
    // this.router.navigate(['profile']);
  }
  onEdit() {
    // this.router.navigate(['register-edit']);
  }
}
