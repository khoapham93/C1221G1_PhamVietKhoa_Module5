import {Component, OnInit} from '@angular/core';
import {Calculate} from './calculate';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  calculator: Calculate = {
    firstNumber: '0',
    secondNumber: '0'
  };

  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  compute(event) {
    const idAttr = event.currentTarget.id;
    const number1 = Number(this.calculator.firstNumber);
    const number2 = Number(this.calculator.secondNumber);
    if (isNaN(number1) || isNaN(number2)) {
      alert('Please enter a number');
    } else {
      switch (idAttr) {
        case 'add':
          this.result = number1 + number2;
          break;
        case 'sub':
          this.result = number1 - number2;
          break;
        case 'mul':
          this.result = number1 * number2;
          break;
        case 'div': {
          if (number2 === 0) {
            alert('cant not div to zero');
          } else {
            this.result = number1 / number2;
          }
          break;
        }
      }
    }
  }

}
