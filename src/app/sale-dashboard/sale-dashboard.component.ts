import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { LocalStorageService } from 'angular-2-local-storage';
import { GetDataService } from '../getDataService';

@Component({
  selector: 'app-sale-dashboard',
  templateUrl: './sale-dashboard.component.html',
  styleUrls: ['./sale-dashboard.component.css'],
  providers: [GetDataService]
})
export class SaleDashboardComponent implements OnInit {
  date: Date;
  temp: any;
  name: string;
  private serviceURL = 'http://crm.csigroups.com/suitecrmdemo/service/v4_1/rest.php';
  params = {
    session: "v8pkh36c2g2gmoiopkcm3r49l2",
    module_name: "Opportunities",
    query: "",
    order_by: "",
    offset: null,
    select_fields: "",
    link_name_to_fields_array: "",
    max_results: 100
  };
  jsonData: string;
  dataRecieve: any;
  headers: any;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[] = ['11月2日', '11月3日', '11月4日', '11月5日'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [6, 6, 6, 12], label: 'Customer Visit' }
  ];

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(getDataService: GetDataService, private localStorageService: LocalStorageService) {
    this.date = new Date();
    this.jsonData = JSON.stringify(this.params);
    getDataService.fnPost("get_entry_list", this.jsonData).subscribe(
      res => {
        //console.log(res);
        //this.temp = res['entry_list'];
        let entry_list = res['entry_list'];
        this.temp = JSON.stringify(res);
        //console.log("Send data=" + this.temp);
        localStorage.setItem('Opportunities', this.temp);
        // entry_list.forEach(element => {
        //   console.log(((element['name_value_list'])['assigned_user_name'])['value'])
        // });
        this.name = entry_list[0].name_value_list.assigned_user_name.value;
        localStorage.setItem('Name', this.name);
        //console.log(this.temp);
        //console.log("name" + this.name);
      }
    );
  }

  ngOnInit() {
  }

}
