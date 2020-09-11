import { ProjetService } from 'src/app/services/projet/projet.service';
import { Projet } from './../../entities/Projet';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Chartist from 'chartist';
import * as d3 from 'd3';
import * as XLSX from 'xlsx';
import { FluxService } from 'src/app/services/flux/flux.service';
import { Observable, of } from 'rxjs';
import { Flux } from 'src/app/entities/Flux';
import { ServerService } from 'src/app/services/server/server.service';
import { Serveur } from 'src/app/entities/Serveur';
import { DashboardService } from './dashboard.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css'],
})
export class DashbordComponent implements OnInit {
  // Function exporttoExcel
  @ViewChild('TABLE')
  TABLE: ElementRef;

  public flux$: Observable<Flux[]> = this.fluxService.getFluxs();
  public server$: Observable<Serveur[]> = this.serverService.getServers();
  public projects$: Observable<any> = this.projectsService.getProjects();

  public serversCount$ = this.dashbordService.countServers();
  public projectsCount$ = this.dashbordService.countProjects();
  public fluxCount$ = this.dashbordService.countFlux();
  public networkErrorMessage = 'Network Error';

  @ViewChild('TABLE1')
  TABLE1: ElementRef;

  @ViewChild('chart') private chartContainer: ElementRef;
  @Input() private data: Array<any>;
  private margin: any = { top: 20, bottom: 20, left: 20, right: 20 };
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private colors: any;
  private xAxis: any;
  private yAxis: any;

  constructor(
    private fluxService: FluxService,
    private serverService: ServerService,
    private dashbordService: DashboardService,
    private projectsService: ProjetService
  ) {}

  ngOnInit() {
    const dataDailySalesChart: any = {
      labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      series: [[12, 17, 7, 17, 23, 18, 38]],
    };

    const optionsDailySalesChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const dailySalesChart = new Chartist.Line(
      '#dailySalesChart',
      dataDailySalesChart,
      optionsDailySalesChart
    );

    this.startAnimationForLineChart(dailySalesChart);

    const dataCompletedTasksChart: any = {
      labels: ['12p', '3p', '6p', '9p', '12p', '3a', '6a', '9a'],
      series: [[230, 750, 450, 300, 280, 240, 200, 190]],
    };

    const optionsCompletedTasksChart: any = {
      lineSmooth: Chartist.Interpolation.cardinal({
        tension: 0,
      }),
      low: 0,
      high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
      chartPadding: { top: 0, right: 0, bottom: 0, left: 0 },
    };

    const completedTasksChart = new Chartist.Line(
      '#completedTasksChart',
      dataCompletedTasksChart,
      optionsCompletedTasksChart
    );

    // start animation for the Completed Tasks Chart - Line Chart
    this.startAnimationForLineChart(completedTasksChart);

    /* ----------==========     Emails Subscription Chart initialization    ==========---------- */

    const datawebsiteViewsChart = {
      labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
      series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]],
    };
    const optionswebsiteViewsChart = {
      axisX: {
        showGrid: true,
      },
      low: 0,
      high: 1000,
      chartPadding: { top: 0, right: 5, bottom: 0, left: 0 },
    };
    const responsiveOptions: any[] = [
      [
        'screen and (max-width: 640px)',
        {
          seriesBarDistance: 5,
          axisX: {
            labelInterpolationFnc(value) {
              return value[0];
            },
          },
        },
      ],
    ];
    const websiteViewsChart = new Chartist.Bar(
      '#websiteViewsChart',
      datawebsiteViewsChart,
      optionswebsiteViewsChart,
      responsiveOptions
    );

    // start animation for the Emails Subscription Chart
    this.startAnimationForBarChart(websiteViewsChart);
  }

  ExportTOExcel() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'FluxParServeur.xlsx');
  }
  ExportTOExcel1() {
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(
      this.TABLE1.nativeElement
    );
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet2');
    XLSX.writeFile(wb, 'ServeurParProjet.xlsx');
  }

  // Charts
  startAnimationForLineChart(chart) {
    let seq: any;
    let delays: any;
    let durations: any;
    seq = 0;
    delays = 80;
    durations = 500;

    chart.on('draw', (data) => {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint,
          },
        });
      } else if (data.type === 'point') {
        seq++;
        data.element.animate({
          opacity: {
            begin: seq * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq = 0;
  }
  startAnimationForBarChart(chart) {
    let seq2: any;
    let delays2: any;
    let durations2: any;

    seq2 = 0;
    delays2 = 80;
    durations2 = 500;
    chart.on('draw', (data) => {
      if (data.type === 'bar') {
        seq2++;
        data.element.animate({
          opacity: {
            begin: seq2 * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: 'ease',
          },
        });
      }
    });

    seq2 = 0;
  }

  getServerById(id: number) {
    return this.serverService.getServertById(id);
  }
}
