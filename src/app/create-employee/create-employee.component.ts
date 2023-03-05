import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

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

  registerEmployee() {
    this.employeeService.createEmployee(this.employee).subscribe((data) => {
      this.gotoEmployeeList();
    });
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee']);
  }

  onSubmit() {
    console.log(this.employee);
    this.registerEmployee();
  }
}
