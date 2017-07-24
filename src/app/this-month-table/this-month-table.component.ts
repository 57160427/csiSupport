import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { RecordDataTable } from '../RecordDataTable';
import { GetDataService } from '../getDataService';
//import { request } from '../testts'

@Component({
  selector: 'app-this-month-table',
  templateUrl: './this-month-table.component.html',
  styleUrls: ['./this-month-table.component.css'],
  providers: [GetDataService]
})
export class ThisMonthTableComponent implements OnInit {
  date: Date;
  selectedRow: Number;
  setClickedRow: Function;
  titles: string[];
  temps: Object;
  name: string;
  successTables: RecordDataTable[] = [];
  lostTables: RecordDataTable[] = [];
  otherTables: RecordDataTable[] = [];
  ongoingTables: RecordDataTable[] = [];
  testtemp: object[] = [];
  prospects: [{
    planOf: Date,
    status: string,
    customer: string,
    prospectName: string,
    nextStep: string,
    soAmount: number
  }];
  params = {
    session: "v8pkh36c2g2gmoiopkcm3r49l2",
    module_name: "Opportunities",
    query: "datediff(month, date_closed, GETDATE()) = 0",
    order_by: "",
    offset: null,
    select_fields: "",
    link_name_to_fields_array: "",
    max_results: 100
  };
  jsonData: string;
  dataInStorage: any;
  constructor(getDataService: GetDataService, private localStorageService: LocalStorageService) {
    this.dataInStorage = JSON.parse(localStorage.getItem('Opportunities'));
    this.name = localStorage.getItem('Name');
    this.date = new Date();
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
            switch (entry_list[index].name_value_list.projecttype_c.value) {
              case 'A': this.successTables.push(temp); break;
              case 'L': ;
              case 'X': this.lostTables.push(temp); break;
              default: this.otherTables.push(temp);
            }
          }
        });
        //this.name = localStorage.getItem('Name');
        //console.log(this.temp);
        //console.log("name" + this.name);
      }
    );
    // this.dataInStorage.entry_list.forEach((element, index) => {
    //   let dateClose = new Date(this.dataInStorage.entry_list[index].name_value_list.date_closed.value);
    //   if (this.dataInStorage.entry_list[index].name_value_list.assigned_user_name.value == this.name) {
    //     let temp = {
    //       planOf: new Date(this.dataInStorage.entry_list[index].name_value_list.date_closed.value),
    //       status: this.dataInStorage.entry_list[index].name_value_list.projecttype_c.value,
    //       customer: this.dataInStorage.entry_list[index].name_value_list.account_name.value,
    //       prospectName: this.dataInStorage.entry_list[index].name_value_list.name.value,
    //       nextStep: this.dataInStorage.entry_list[index].name_value_list.next_step.value,
    //       soAmount: this.dataInStorage.entry_list[index].name_value_list.amount.value
    //     };
    //     if (dateClose.getMonth() == this.date.getMonth()) {
    //       switch (this.dataInStorage.entry_list[index].name_value_list.projecttype_c.value) {
    //         case 'A': this.successTables.push(temp); break;
    //         case 'L': ;
    //         case 'X': this.lostTables.push(temp); break;
    //         default: this.otherTables.push(temp);
    //       }
    //     }
    //     if (dateClose.getMonth() > this.date.getMonth()) {
    //       this.ongoingTables.push(temp);
    //     }
    //   }
    // });
    // this.ongoingTables.sort(function (date1, date2) {
    //   if (date1.planOf < date2.planOf) {
    //     return -1;
    //   } else if (date1.planOf > date2.planOf) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    this.sortDate(this.successTables);
    this.sortDate(this.lostTables);
    this.sortDate(this.otherTables);
    this.sortDate(this.ongoingTables);
    localStorage.setItem('ongoingTable', JSON.stringify(this.ongoingTables));
    console.log(this.successTables);
    //console.log(this.otherTables);
    //console.log(this.lostTables);
    this.date = new Date("2017-04-03");
    this.titles = ["Plan of", "Status", "Customer", "Prospect name", "NEXT STEP", "SO Amount(K)"];
    this.prospects = [{
      planOf: new Date("2017-04-01"),
      status: "B",
      customer: "YCT",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-04-01"),
      status: "C+",
      customer: "YCT",
      prospectName: "System Support",
      nextStep: "Propose new structure on 22nd Apr.<br /> Tnternal meeting to finalize presenations within 20th Apr.",
      soAmount: null
    },
    {
      planOf: new Date("2017-04-01"),
      status: "C",
      customer: "YMP",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-05-01"),
      status: "C+",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-05-01"),
      status: "C",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-05-01"),
      status: "D",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-06-01"),
      status: "C",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-06-01"),
      status: "D",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-07-01"),
      status: "C+",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-07-01"),
      status: "C",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-07-01"),
      status: "D",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-08-01"),
      status: "C+",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-08-01"),
      status: "D",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    },
    {
      planOf: new Date("2017-09-01"),
      status: "B",
      customer: "",
      prospectName: "",
      nextStep: "",
      soAmount: null
    }];
    this.setClickedRow = function (index) {
      this.selectedRow = index;
    }
  }

  ngOnInit() {
    //console.log(request);
  }
  sortDate(tableObject: any) {
    tableObject.sort(function (date1, date2) {
      if (date1.planOf < date2.planOf) {
        return -1;
      } else if (date1.planOf > date2.planOf) {
        return 1;
      } else {
        return 0;
      }
    });
  }

}
