import { Component, OnInit, ViewChild } from '@angular/core';

import { GeneralService } from 'src/app/services/general.service';
import { IPrisoner } from 'src/interfaces';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PrisonerService } from 'src/app/services/prisoner.service';
import { Router } from '@angular/router';

export interface PeriodicElement {
  taxNumber: number;
  fullName: string;
  caseNumber: number;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  ELEMENT_DATA: Array<IPrisoner> = [];
  displayedColumns: string[] = ['taxNumber', 'fullName', 'caseNumber'];
  dataSource = new MatTableDataSource<IPrisoner>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private prisonerService: PrisonerService,
    private router: Router,
    private generalService: GeneralService
  ) {}
  ngOnInit() {
    this.prisonerService.getPrisoners().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<IPrisoner>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
  }
  ngOnChange() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onToggle(obj: IPrisoner) {
    console.log(obj);
    this.generalService.setPrisoner(obj);
    this.router.navigate(['/profile']);
  }
}
