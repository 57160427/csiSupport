import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-visit-chart',
  templateUrl: './customer-visit-chart.component.html',
  styleUrls: ['./customer-visit-chart.component.css']
})
export class CustomerVisitChartComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
