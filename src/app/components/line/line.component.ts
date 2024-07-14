import { Component, Input, OnChanges } from '@angular/core';
import Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { chartData, yearData } from '../../dataset';

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './line.component.html',
})
export class LineComponent implements OnChanges {
  @Input() dataRange!: string;
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  ngOnChanges() {
    this.updateChart();
  }

  updateChart() {
    const isAllData = this.dataRange === 'all';
    const categories = isAllData
      ? yearData.map((year) => String(year))
      : [String(yearData[yearData.length - 1])];
    const seriesData: Highcharts.SeriesLineOptions[] = chartData.map(
      (data) => ({
        type: 'line',
        name: data.brand,
        data: isAllData ? data.data : [data.data[data.data.length - 1]],
      })
    );

    this.chartOptions = {
      title: {
        text: 'My Demo Line',
      },
      xAxis: {
        title: {
          text: 'Year',
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
      series: seriesData,
    };
  }

  ngOnInit() {
    this.updateChart();
  }
}
