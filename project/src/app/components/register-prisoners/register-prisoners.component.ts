import { Benefits, Gender, IPrisoner } from 'src/interfaces';
import { Component, OnInit, ViewChild } from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PrisonerService } from 'src/app/services/prisoner.service';
import { Router } from '@angular/router';

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
  constructor(
    public generalService: GeneralService,
    private prisonerService: PrisonerService,
    private router:Router
  ) {}
  public ELEMENT_DATA: Array<IPrisoner> = [];
  ngOnInit(): void {
    this.prisonerService.getPrisoners().subscribe((arr) => {
      arr.forEach((prisoner: IPrisoner) => this.ELEMENT_DATA.push(prisoner));
      this.dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
  displayedColumns: string[] = [
    'taxNumber',
    'fullName',
    'caseNumber',
    'buttons',
  ];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild('table', { static: true }) table:any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  onDelete(id: number) {
    this.prisonerService.deletePrisoners(String(id));
    this.ELEMENT_DATA = [];
    this.prisonerService.getPrisoners().subscribe((arr) => {
      let data:any = [];
      arr.forEach((prisoner: IPrisoner) => data.push(prisoner));
      this.dataSource.data = data;
      this.dataSource._updateChangeSubscription();
    })
    this.table.renderRows();

  }
  onEdit(prisoner:IPrisoner) {
    this.router.navigate(['register-edit']);
    this.generalService.setPrisoner(prisoner);
  }
}
