import { Component, OnInit } from '@angular/core';
import * as data from '../sales.json';
import { GetDataService } from '../getDataService';
import { NameDateComponent } from '../name-date/name-date.component'
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-current-date-target-table',
  templateUrl: './current-date-target-table.component.html',
  styleUrls: ['./current-date-target-table.component.css'],
  providers: [GetDataService, NameDateComponent]
})
export class CurrentDateTargetTableComponent implements OnInit {

  date: Date;
  ratios: object[] = [];
  temp: any;
  name: string;
  currentMonth: Date;
  soTarget: number = 0;
  soActual: number = 0;
  achievement: number = 0;
  totalCount: number = 0;
  successCount: number = 0;
  persen: number = 0;
  jsonData: string;
  dataRecieve: any;
  headers: any;
  currentTargets: object[] = [];
  titles: string[];
  dataInStorage: any;
  constructor(private localStorageService: LocalStorageService) {
    this.currentTargets[0] = (<any>data).sales[0].currentTarget;
    this.dataInStorage = JSON.parse(localStorage.getItem('Opportunities'));
    this.name = localStorage.getItem('Name');
    this.titles = ["SO Target", "SO Actual", "Achievement"];
    this.date = new Date();
    this.dataInStorage.entry_list.forEach((element, index) => {
      let dateClose = new Date(this.dataInStorage.entry_list[index].name_value_list.date_closed.value);
      if (this.dataInStorage.entry_list[index].name_value_list.assigned_user_name.value == this.name) {
        if (dateClose.getMonth() == this.date.getMonth()) {
          this.soTarget += this.dataInStorage.entry_list[index].name_value_list.amount.value;
          this.totalCount += 1;
        }
      }
      if (dateClose > this.date && dateClose.getMonth() == this.date.getMonth()) {
        this.soActual += this.dataInStorage.entry_list[index].name_value_list.amount.value;
        this.successCount += 1;
      }
    });
    this.achievement = (this.successCount / this.totalCount) * 100;
  }

  ngOnInit() {
  }

}
