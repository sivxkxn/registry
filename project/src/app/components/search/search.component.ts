import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  @ViewChild('table', { static: true }) table: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(
    private prisonerService: PrisonerService,
    private router: Router,
    private generalService: GeneralService
  ) {}
  fullForm!: FormGroup;
  fullName!: FormControl;
  taxNumber!: FormControl;
  caseNumber!: FormControl;

  ngOnInit() {
    this.prisonerService.getPrisoners().subscribe((data) => {
      this.ELEMENT_DATA = data;
      this.dataSource = new MatTableDataSource<IPrisoner>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    });
    this.fullForm = new FormGroup({
      fullName: new FormControl(''),
      taxNumber: new FormControl(''),
      caseNumber: new FormControl(''),
    });
    // let data = this.ELEMENT_DATA;
    this.fullForm.valueChanges.subscribe((form) => {
      let newArray: Array<IPrisoner> = [];
      let store = this.ELEMENT_DATA.slice();
      this.ELEMENT_DATA.forEach((x) =>
        x.fullName?.includes(form.fullName.trim()) 
          ? newArray.push(x)
          : newArray
      );
      console.log(form.taxNumber);
      this.dataSource.data = newArray;
      // if (form.fullName === null || form.taxNumber === null) this.dataSource.data =  store;
      // if((newArray.length && form.fullName.trim().length && form.taxNumber.value && form.caseNumber.value)){
      //   this.dataSource.data = store;
      // }
      // if(form.fullName=='' && form.taxNumber=='' && form.caseNumber==''){  this.dataSource.data = store;}

      // this.dataSource._updateChangeSubscription();
    });
    // this.table.renderRows();
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
