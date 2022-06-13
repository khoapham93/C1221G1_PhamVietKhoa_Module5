import {Component, OnInit} from '@angular/core';
import {contracts} from '../../data/contracts';
import {ContractService} from '../../services/ContractService';

@Component({
  selector: 'app-contracts-list',
  templateUrl: './contracts-list.component.html',
  styleUrls: ['./contracts-list.component.css']
})
export class ContractsListComponent implements OnInit {
  contracts;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.contracts = this.contractService.getAllContract();
  }

}
