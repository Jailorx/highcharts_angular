import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { chartData, yearData } from '../../dataset';

@Component({
  selector: 'app-column-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './column.component.html',
})
export class ColumnComponent implements OnChanges, OnInit {
  @Input() dataRange!: string;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  ngOnChanges() {
    this.updateChart();
  }

  ngOnInit() {
    this.updateChart();
  }

  updateChart() {
    const isAllData = this.dataRange === 'all';
    const categories = isAllData
      ? yearData.map((year) => String(year))
      : [String(yearData[yearData.length - 1])];
    const seriesData: Highcharts.SeriesColumnOptions[] = chartData.map(
      (data) => ({
        type: 'column',
        name: data.brand,
        data: isAllData ? data.data : [data.data[data.data.length - 1]],
      })
    );

    this.chartOptions = {
      chart: {
        type: 'column',
      },
      title: {
        text: 'Demo Column Chart',
      },
      xAxis: {
        title: {
          text: 'Years',
        },
        categories,
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Quantity in millions',
        },
      },
      tooltip: {
        headerFormat: '<b>{point.x}</b><br/>',
        pointFormat: '{series.name}: {point.y}',
      },
      plotOptions: {
        column: {
          grouping: true,
          shadow: false,
        },
      },
      series: seriesData,
    };
  }
}
