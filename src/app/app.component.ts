import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { LineComponent } from './components/line/line.component';
import { ColumnComponent } from './components/column/column.component';
import { AreaComponent } from './components/area/area.component';
import { PieComponent } from './components/pie/pie.component';
import { GaugeComponent } from './components/guage/guage.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatInputModule,
    MatSelectModule,
    HighchartsChartModule,
    LineComponent,
    ColumnComponent,
    AreaComponent,
    PieComponent,
    GaugeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedChart = 'line';
  selectedDataRange = 'all';
  charts = [
    { value: 'line', viewValue: 'Line Chart' },
    { value: 'column', viewValue: 'Column Chart' },
    { value: 'area', viewValue: 'Area Chart' },
    { value: 'pie', viewValue: 'Pie Chart' },
    { value: 'gauge', viewValue: 'Gauge Chart' },
  ];
  dataRanges = [
    { value: 'all', viewValue: 'All Data' },
    { value: 'latest', viewValue: 'Latest Year' },
  ];
}
