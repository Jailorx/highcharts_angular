import { Component, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { chartData, yearData } from '../../dataset';
@Component({
  selector: 'app-area-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './area.component.html',
})
export class AreaComponent {
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
    const seriesData: Highcharts.SeriesAreaOptions[] = chartData.map(
      (data) => ({
        type: 'area',
        name: data.brand,
        data: isAllData ? data.data : [data.data[data.data.length - 1]],
      })
    );

    this.chartOptions = {
      chart: {
        type: 'area',
      },
      title: {
        text: 'My Demo Area Chart',
      },
      subtitle: {
        text: 'Area chart displaying brands sales quantities',
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
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666',
          },
        },
      },
      series: seriesData,
    };
  }

  ngOnInit() {
    this.updateChart();
  }
}
