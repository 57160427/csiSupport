import { Component, OnInit } from '@angular/core';
import { RecordTest } from './RecordTest'
import { LocalStorageService } from 'angular-2-local-storage';
import { GetDataService } from '../getDataService';

@Component({
  selector: 'app-ongoing-table',
  templateUrl: './ongoing-table.component.html',
  styleUrls: ['./ongoing-table.component.css'],
  providers: [GetDataService]
})
export class OngoingTableComponent implements OnInit {
  pages: number = 4;
  pageSize: number = 5;
  pageNumber: number = 0;
  currentIndex: number = 1;
  pagesIndex: Array<number>;
  pageStart: number = 1;
  prospectsOngoing: RecordTest[] = [];
  prospectsTemp: RecordTest[] = [];
  date: Date;
  selectedRow: Number;
  setClickedRow: Function;
  titles: string[];
  name: string;
  params = {
    session: "v8pkh36c2g2gmoiopkcm3r49l2",
    module_name: "Opportunities",
    query: "datediff(month, date_closed, GETDATE()) < 0",
    order_by: "",
    offset: null,
    select_fields: "",
    link_name_to_fields_array: "",
    max_results: 100
  };
  jsonData: string;
  dataInStorage: any;
  constructor(getDataService: GetDataService, private localStorageService: LocalStorageService) {
    this.dataInStorage = JSON.parse(localStorage.getItem('ongoingTable'));
    //console.log(this.dataInStorage)
    this.date = new Date();
    this.name = localStorage.getItem('Name');
    this.titles = ["Plan of", "Status", "Customer", "Prospect name", "NEXT STEP", "SO Amount(K)"];
    this.jsonData = JSON.stringify(this.params);
    getDataService.fnPost("get_entry_list", this.jsonData).subscribe(
      res => {
        //console.log(res);
        //this.temp = res['entry_list'];
        let entry_list = res['entry_list'];
        //this.temp = JSON.stringify(res);
        //console.log("Send data=" + this.temp);
        //localStorage.setItem('Opportunities', this.temp);
        entry_list.forEach((element, index) => {
          if (entry_list[index].name_value_list.assigned_user_name.value == this.name) {
            let temp = {
              planOf: new Date(entry_list[index].name_value_list.date_closed.value),
              status: entry_list[index].name_value_list.projecttype_c.value,
              customer: entry_list[index].name_value_list.account_name.value,
              prospectName: entry_list[index].name_value_list.name.value,
              nextStep: entry_list[index].name_value_list.next_step.value,
              soAmount: entry_list[index].name_value_list.amount.value
            };
            this.prospectsTemp.push(temp);
            //this.init();
          }
        });
        //this.name = localStorage.getItem('Name');
        //console.log(this.temp);
        //console.log("name" + this.name);
        this.prospectsTemp.sort(function (date1, date2) {
          if (date1.planOf < date2.planOf) {
            return -1;
          } else if (date1.planOf > date2.planOf) {
            return 1;
          } else {
            return 0;
          }
        });
        this.init();
      }
    );
    //this.init();
  }
  init() {
    this.currentIndex = 1;
    this.pageStart = 1;
    this.pages = 4;

    this.pageNumber = parseInt("" + (this.prospectsTemp.length / this.pageSize));
    if (this.prospectsTemp.length % this.pageSize != 0) {
      this.pageNumber++;
    }

    if (this.pageNumber < this.pages) {
      this.pages = this.pageNumber;
    }

    this.refreshItems();
    //console.log("this.pageNumber :  " + this.pageNumber);
  }
  fillArray(): any {
    var obj = new Array();
    for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
      obj.push(index);
    }
    return obj;
  }
  refreshItems() {
    this.prospectsOngoing = this.prospectsTemp.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
    this.pagesIndex = this.fillArray();
  }
  prevPage() {
    if (this.currentIndex > 1) {
      this.currentIndex--;
    }
    if (this.currentIndex < this.pageStart) {
      this.pageStart = this.currentIndex;
    }
    this.refreshItems();
  }
  nextPage() {
    if (this.currentIndex < this.pageNumber) {
      this.currentIndex++;
    }
    if (this.currentIndex >= (this.pageStart + this.pages)) {
      this.pageStart = this.currentIndex - this.pages + 1;
    }

    this.refreshItems();
  }
  setPage(index: number) {
    this.currentIndex = index;
    this.refreshItems();
  }

  ngOnInit() {
  }

}
