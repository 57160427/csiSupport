import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PaginationModule } from 'ng2-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppComponent } from './app.component';
import {
  MdTabsModule,
  MdGridListModule,
  MdSidenavModule,
  MdToolbarModule,
  MdTableModule
} from '@angular/material';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule } from 'ng2-charts';
import { Ng2PaginationModule } from 'ng2-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaleDashboardComponent } from './sale-dashboard/sale-dashboard.component';
import { ProspectTableComponent } from './prospect-table/prospect-table.component';
import { OngoingTableComponent } from './ongoing-table/ongoing-table.component';
import { NameDateComponent } from './name-date/name-date.component';
import { RatioTableComponent } from './ratio-table/ratio-table.component';
import { CurrentDateTargetTableComponent } from './current-date-target-table/current-date-target-table.component';
import { CustomerVisitChartComponent } from './customer-visit-chart/customer-visit-chart.component';
import { TotalDataTableComponent } from './total-data-table/total-data-table.component';
import { ThisMonthTableComponent } from './this-month-table/this-month-table.component';
@NgModule({
  declarations: [
    AppComponent,
    SaleDashboardComponent,
    ProspectTableComponent,
    OngoingTableComponent,
    NameDateComponent,
    RatioTableComponent,
    CurrentDateTargetTableComponent,
    CustomerVisitChartComponent,
    TotalDataTableComponent,
    ThisMonthTableComponent
  ],
  imports: [
    BrowserModule,
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    }),
    CommonModule,
    FormsModule,
    RouterModule,
    HttpModule,
    Ng2PaginationModule,
    PaginationModule,
    FormsModule,
    MdTabsModule,
    MdGridListModule,
    MdSidenavModule,
    MdTableModule,
    MdToolbarModule,
    BrowserAnimationsModule,
    ChartsModule,
    Ng2TableModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
