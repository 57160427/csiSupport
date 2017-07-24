import { Component, OnInit } from '@angular/core';
import * as data from '../sales.json';
import { GetDataService } from '../getDataService';
import { NameDateComponent } from '../name-date/name-date.component'
import { LocalStorageService } from 'angular-2-local-storage';


@Component({
  selector: 'app-ratio-table',
  templateUrl: './ratio-table.component.html',
  styleUrls: ['./ratio-table.component.css'],
  providers: [GetDataService, NameDateComponent]
})
export class RatioTableComponent implements OnInit {

  date: Date;
  ratios: object[] = [];
  titles: string[];
  temp: any;
  name: string;
  getRatio: number = 0;
  marketingTarget: number = 0;
  onHand: number = 0;
  totalCount: number = 0;
  successCount: number = 0;
  persen: number = 0;
  dataInStorage: any;
  constructor(private localStorageService: LocalStorageService) {
    this.date = new Date();
    this.dataInStorage = JSON.parse(localStorage.getItem('Opportunities'));
    this.name = localStorage.getItem('Name');
    this.titles = ["Get ratio", "Marketing Target", "Prospect on hand"];
    //console.log(this.ratios);
    this.dataInStorage.entry_list.forEach((element, index) => {
      let dateClose = new Date(this.dataInStorage.entry_list[index].name_value_list.date_closed.value);
      if (this.dataInStorage.entry_list[index].name_value_list.assigned_user_name.value == this.name) {
        this.marketingTarget += this.dataInStorage.entry_list[index].name_value_list.amount.value;
        this.totalCount += 1;
        if (dateClose > this.date) {
          this.onHand += this.dataInStorage.entry_list[index].name_value_list.amount.value;
          this.successCount += 1;
        }
      }
    });
    this.persen = (this.successCount / this.totalCount) * 100;
  }

  ngOnInit() {
  }

}
