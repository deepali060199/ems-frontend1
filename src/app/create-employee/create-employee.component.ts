import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();
  default: string = 'Ratings';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    gender: new FormControl(''),
    age: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),

    email: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),

    salary: new FormControl('', [Validators.required]),
    rating: new FormControl(''),
  });

  // onSelected(value: string) {
  //   this.registrationFor = value;
  // }

  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get age() {
    return this.registrationForm.get('age');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get state() {
    return this.registrationForm.get('state');
  }
  get city() {
    return this.registrationForm.get('city');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get salary() {
    return this.registrationForm.get('salary');
  }
  get rating() {
    return this.registrationForm.get('rating');
  }

  registerEmployee() {
    this.employeeService
      .createEmployee(this.registrationForm.value)
      .subscribe((data) => {
        this.gotoEmployeeList();
      });
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
    console.log(this.registrationForm.value);

    this.registerEmployee();
  }
}
