import {CustomerService} from './customers/CustomerService';
import {AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CustomValidate {
  constructor(private customerService: CustomerService) {
  }

  customerCodeValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.customerService.checkCustomerCode(control.value).pipe(
        map(res => {
          // if res is true, username exists, return true
          return res ? null : {customerCodeExisted: true};
          // NB: Return null if there is no error
        })
      );
    };
  }

  dateValidate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (control && control.value && !moment(control.value, ['YYYY-MM-DD', 'DD-MM-YYYY'], true).isValid()) {
        return {dateValidator: true};
      }
      return null;
    };
  }

  compareDate(startDate: string, endDate: string) {
    return (formGroup: FormGroup) => {
      const startDateControl = formGroup.controls[startDate];
      const endDateControl = formGroup.controls[endDate];
      if (!startDateControl || !endDateControl) {
        return null;
      }
      if (startDateControl.errors && !endDateControl.errors.mustLater) {
        return null;
      }
      const start = moment(startDateControl.value, ['YYYY-MM-DD', 'DD-MM-YYYY']);
      const end = moment(endDateControl.value, ['YYYY-MM-DD', 'DD-MM-YYYY']);
      if (end.isBefore(start) && startDateControl && endDateControl) {
        console.log('invole');
        endDateControl.setErrors({mustLater: true});
      }
    };
  }
}
