import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  taxCode: number;
  name: string;
  number: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {taxCode: 1, name: 'Hydrogen', number: 1.0079},
  {taxCode: 2, name: 'Helium', number: 4.0026},
  {taxCode: 3, name: 'Lithium', number: 6.941},
  {taxCode: 4, name: 'Beryllium', number: 9.0122},
  {taxCode: 5, name: 'Boron', number: 10.811},
  {taxCode: 6, name: 'Carbon', number: 12.0107},
  {taxCode: 7, name: 'Nitrogen', number: 14.0067},
  {taxCode: 8, name: 'Oxygen', number: 15.9994},
  {taxCode: 9, name: 'Fluorine', number: 18.9984},
  {taxCode: 10, name: 'Neon', number: 20.1797},
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  displayedColumns: string[] = ['taxCode', 'name', 'number'];
  dataSource = ELEMENT_DATA;
  paginationNumber = ELEMENT_DATA.length;
  constructor() { }

  ngOnInit(): void {
  }

}
