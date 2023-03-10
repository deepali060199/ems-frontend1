import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    salaryGrade: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.pattern('[1-9]+$')]),
  });

  get name() {
    return this.registrationForm.get('name');
  }
  get address() {
    return this.registrationForm.get('address');
  }
  get salaryGrade() {
    return this.registrationForm.get('salaryGrade');
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
