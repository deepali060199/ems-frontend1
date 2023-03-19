import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css'],
})
export class EmployeePortalComponent {
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService) {}

  getByNameOrId(arg: string) {
    // search by Id
    this.employeeService.getEmployeeById(Number(arg)).subscribe((data) => {
      this.employee = data;
      console.log(data);
    });
  }
}
