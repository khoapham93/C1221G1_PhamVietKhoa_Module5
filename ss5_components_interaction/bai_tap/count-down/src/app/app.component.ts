import { Component } from '@angular/core';
import {CountingDown} from "./count-down/CountingDown";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count-down';
  countingInProgess:CountingDown = new CountingDown();

  countDownProgess(event: CountingDown) {
    this.countingInProgess=event;

  }
}
