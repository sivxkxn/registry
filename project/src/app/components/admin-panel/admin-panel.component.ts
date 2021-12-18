import { Component, OnInit, ViewChild } from '@angular/core';

import { Active } from 'src/interfaces';
import { IUser } from 'src/interfaces';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  public isActive = Active;
  ngOnInit(): void {
  }
  onSave() {}
}
