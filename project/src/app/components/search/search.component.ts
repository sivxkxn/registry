import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



export interface PeriodicElement {
  taxNumber: number;
  name: string;
  caseNumber: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
{taxNumber:74366736254, name:"Іван Петрович Лужний", caseNumber:674623783},
{taxNumber:2492347857, name:"Артем Іванивич Прудніков", caseNumber:372642},
{taxNumber:6476257345, name:"Василь Семенович Ліхошва", caseNumber:82467326},
];
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['taxNumber', 'name', 'caseNumber'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
