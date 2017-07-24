import { Component, OnInit } from '@angular/core';
import { HttpModule, Response, Http, RequestOptions } from '@angular/http'
import * as data from '../sales.json';
import { GetDataService } from '../getDataService';
import { LocalStorageService } from 'angular-2-local-storage';

@Component({
  selector: 'app-name-date',
  templateUrl: './name-date.component.html',
  styleUrls: ['./name-date.component.css'],
  providers: [GetDataService]
})
export class NameDateComponent implements OnInit {
  date: Date;
  temp: any;
  name: string;
  dataInStorage: any;
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
  dataRecieve: any;
  constructor(getDataService: GetDataService,private localStorageService: LocalStorageService) {
    //this.dataInStorage = JSON.parse(localStorage.getItem('Opportunities'));
    //console.log(this.dataInStorage)
    //console.log(localStorage.getItem('Name'));
    //this.name = localStorage.getItem('Name');
    this.date = new Date();
    //console.log("name" + this.name);
    this.jsonData = JSON.stringify(this.params);
    getDataService.fnPost("get_entry_list", this.jsonData).subscribe(
      res => {
        //console.log(res);
        //this.temp = res['entry_list'];
        let entry_list = res['entry_list'];
        this.temp = JSON.stringify(res);
        //console.log("Send data=" + this.temp);
        //localStorage.setItem('Opportunities', this.temp);
        // entry_list.forEach(element => {
        //   console.log(((element['name_value_list'])['assigned_user_name'])['value'])
        // });
        this.name = entry_list[1].name_value_list.assigned_user_name.value;
        localStorage.setItem('Name', this.name);
        //this.name = localStorage.getItem('Name');
        //console.log(this.temp);
        //console.log("name" + this.name);
      }
    );
  }

  ngOnInit() {
  }

}
