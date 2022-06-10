import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CountingDown} from "./CountingDown";

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit {

  counting: CountingDown = new CountingDown();
  seconds = 10;

  @Output()
  finish = new EventEmitter<CountingDown>();
  private intervalId = 0;

  clearTimer() {
    clearInterval(this.intervalId);
  }

  constructor() {
  }

  ngOnInit(): void {
    this.reset();
  }

  start() {
    this.countDown();
    if (this.counting.remainingTime <= 0) {
      this.counting.remainingTime = this.seconds;
    }
    this.finish.emit(this.counting);
  }

  stop() {
    this.clearTimer();
    this.counting.status = `Holding at T-${this.counting.remainingTime} seconds`;
    this.finish.emit(this.counting);

  }

  reset() {
    this.clearTimer();
    this.counting.remainingTime = this.seconds;
    this.counting.status = `Click start button to start the Countdown`;
    this.finish.emit(this.counting);
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.counting.remainingTime -= 1;
      if (this.counting.remainingTime === 0) {
        this.counting.status = 'Blast off!';
        this.clearTimer();
      } else {
        this.counting.status = `T-${this.counting.remainingTime} seconds and counting`;
      }
      this.finish.emit(this.counting);
    }, 1000);
  }
}
