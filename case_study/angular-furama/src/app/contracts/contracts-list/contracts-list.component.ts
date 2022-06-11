import {Component, OnInit} from '@angular/core';
import {contracts} from '../../data/contracts';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {
  contracts = contracts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
