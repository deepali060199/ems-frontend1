import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  selectedEmployee: Employee = new Employee();
  // selectedEmployees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getEmployeees();
  }

  getEmployeees() {
    this.employeeService.getEmployeeList().subscribe((data) => {
      this.employees = data;
      console.log(data);
    });
  }

  updateEmployee(id: number) {
    console.log('id:' + id);
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number) {
    console.log('id:' + id);
    this.employeeService.deleteEmployee(id).subscribe((data) => {
      console.log(data);
      this.getEmployeees();
    });

    console.log(this.selectedEmployee);
  }

  deleteMultiple() {
    if (this.isAllCheckBoxChecked()) {
      this.employees.forEach((e) => {
        console.log(e);
        this.deleteEmployee(e.id);
      });
    } else {
      this.employees.forEach((e) => {
        if (e.checked) {
          this.deleteEmployee(e.id);
        }
      });
    }
  }

  checkAllCheckBox(ev: any) {
    this.employees.forEach(
      (x) => ((x.checked = ev.target.checked), console.log('checked:' + x))
    );
  }

  isAllCheckBoxChecked() {
    return this.employees.every((p) => p.checked);
  }

  checkbox(employee: Employee) {
    employee.checked = employee.checked ? true : false;
    this.selectedEmployee = employee;

    console.log('emp:' + this.selectedEmployee.id);
  }
}
