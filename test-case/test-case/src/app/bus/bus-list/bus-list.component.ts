import {Component, OnInit} from '@angular/core';
import {Bus} from '../bus';
import {BusService} from '../bus.service';

declare let threeDotForCustomer: any;

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  p = 0;
  buses: Bus[] = [];
  busDelete = {} as Bus;
  totalPages: number;
  currentPage: number;

  constructor(private busService: BusService) {
  }

  ngOnInit(): void {
    this.getBuses({page: 0, size: 5});

    // this.busService.getAll().subscribe(data => {
    //   this.buses = data;
    // });
    // tslint:disable-next-line:no-unused-expression
    new threeDotForCustomer();
  }

  private getBuses(request) {
    this.busService.getAll(request)
      .subscribe(data => {
          console.log(data);
          this.buses = data['content'];
          this.currentPage = data['number'];
          this.totalPages = data['totalPages'];
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  deleteBus(busDelete: Bus) {
    console.log(busDelete);
    this.busService.delete(busDelete).subscribe(() => {
      this.ngOnInit();
    });
  }

  getBus(bus: Bus) {
    this.busDelete = bus;
  }
}
