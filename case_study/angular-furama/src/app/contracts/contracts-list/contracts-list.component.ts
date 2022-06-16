import {Component, OnInit} from '@angular/core';
import {ContractService} from '../ContractService';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {
  contracts;
  p = 0;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contractService.getAllContract().subscribe(contracts => {
      this.contracts = contracts;
    });
  }
}
