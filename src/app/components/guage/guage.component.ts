// import { Component } from '@angular/core';
// import * as Highcharts from 'highcharts';
// import HC_more from 'highcharts/highcharts-more';
// import HC_solid_gauge from 'highcharts/modules/solid-gauge';
// import { HighchartsChartModule } from 'highcharts-angular';
// import { chartData } from '../../dataset';

// HC_more(Highcharts);
// HC_solid_gauge(Highcharts);

// @Component({
//   selector: 'app-gauge-chart',
//   standalone: true,
//   imports: [HighchartsChartModule],
//   templateUrl: './guage.component.html',
// })
// export class GaugeComponent {
//   Highcharts: typeof Highcharts = Highcharts;
//   chartOptions: Highcharts.Options = {
//     chart: {
//       type: 'gauge',
//     },
//     title: {
//       text: 'Demo Gauge Chart',
//     },
//     pane: {
//       startAngle: -150,
//       endAngle: 150,
//       background: [
//         {
//           backgroundColor: {
//             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//             stops: [
//               [0, '#FFF'],
//               [1, '#333'],
//             ],
//           },
//           borderWidth: 0,
//           outerRadius: '109%',
//         },
//         {
//           backgroundColor: {
//             linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
//             stops: [
//               [0, '#333'],
//               [1, '#FFF'],
//             ],
//           },
//           borderWidth: 1,
//           outerRadius: '107%',
//         },

//         {
//           backgroundColor: '#DDD',
//           borderWidth: 0,
//           outerRadius: '105%',
//           innerRadius: '103%',
//         },
//       ],
//     },
//     yAxis: {
//       min: 0,
//       max: 100,
//       title: {
//         text: 'Value',
//       },
//       stops: [
//         [0.1, '#55BF3B'],
//         [0.5, '#DDDF0D'],
//         [0.9, '#DF5353'],
//       ],
//       lineWidth: 0,
//       minorTickInterval: 1,
//       tickPixelInterval: 400,
//       tickWidth: 0,
//       labels: {
//         y: 16,
//       },
//     },
//     tooltip: {
//       valueSuffix: '%',
//     },
//     series: chartData.map((data) => ({
//       type: 'gauge',
//       name: data.brand,
//       data: [data.data[data.data.length - 1]],
//       tooltip: {
//         valueSuffix: '%',
//       },
//     })),
//   };
// }

import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_more from 'highcharts/highcharts-more';
import HC_solid_gauge from 'highcharts/modules/solid-gauge';
import { HighchartsChartModule } from 'highcharts-angular';
import { chartData } from '../../dataset';

HC_more(Highcharts);
HC_solid_gauge(Highcharts);

@Component({
  selector: 'app-gauge-chart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './guage.component.html',
})
export class GaugeComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'gauge',
    },
    title: {
      text: 'Demo Half Gauge Chart',
    },
    pane: {
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: '#FFF',
          borderWidth: 0,
          outerRadius: '85%',
          innerRadius: '85%',
        },
      ],
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: 'Sales',
      },
      labels: {
        y: 10,
      },
      plotBands: [
        {
          from: 0,
          to: 50,
          color: '#55BF3B',
        },
        {
          from: 50,
          to: 75,
          color: '#DDDF0D',
        },
        {
          from: 75,
          to: 100,
          color: '#DF5353',
        },
      ],
    },
    tooltip: {
      valueSuffix: '%',
    },
    series: chartData.map((data) => ({
      type: 'gauge',
      name: data.brand,
      data: [data.data[data.data.length - 1]],
      tooltip: {
        valueSuffix: '%',
      },
    })),
  };
}
