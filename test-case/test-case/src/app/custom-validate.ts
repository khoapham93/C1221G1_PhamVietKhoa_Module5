import {AbstractControl, ValidatorFn} from '@angular/forms';
import {Injectable} from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CustomValidate {
  constructor() {
  }

  dateValidate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control && control.value && !moment(control.value, ['HH:mm'], true).isValid()) {
        return {dateValidator: true};
      }
      return null;
    };
  }
}
