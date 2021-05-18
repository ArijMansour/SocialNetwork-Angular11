import { Component, OnInit} from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})

export class ChartsComponent  {
 
  doughnutChartLabels: Label[] = ['Tunis', 'Sousse', 'Sfax'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
    barChartData: ChartDataSets[] = [
      { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
    ];


}
