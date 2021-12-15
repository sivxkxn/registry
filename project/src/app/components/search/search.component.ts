import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



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
  router!: Router;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  /** Whether the number of selected elements matches the total number of rows. */
//   isAllSelected() {
//   const numSelected = this.selection.selected.length;
//   const numRows = this.dataSource.data.length;
//   return numSelected == numRows;
// }

// /** Selects all rows if they are not all selected; otherwise clear selection. */
//   masterToggle() {
//   this.isAllSelected() ?
//       this.selection.clear() :
//       this.dataSource.data.forEach(row => this.selection.select(row));
// }
onToggle(){
  this.router.navigate(['profile']);
}
  constructor() { }

  ngOnInit(): void {
  }

}
