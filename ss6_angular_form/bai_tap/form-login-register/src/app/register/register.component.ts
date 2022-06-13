import {Component, OnInit} from '@angular/core';
import {User} from "../model/User";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/UserService";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  countries: string [] = ['Viet Nam', 'USA', 'china', 'Korean']
  user = {} as User;
  registerForm: FormGroup;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
        country: new FormControl('', [Validators.required]),
        age: new FormControl('', [Validators.required, Validators.min(18)]),
        gender: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]),
      },
      this.userService.matchPassword('password', 'confirmPassword'));
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get country() {
    return this.registerForm.get('country');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get gender() {
    return this.registerForm.get('gender');
  }

  get phone() {
    return this.registerForm.get('phone');
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.user = this.registerForm.value;
      console.log(this.user);
      alert("success");
    }
  }
}
