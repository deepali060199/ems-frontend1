import { Component } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ems-frontend';

  employee: Employee = new Employee();
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  getByNameOrId(arg: string) {
    this.router.navigate(['/employee-portal', arg]);
  }
}
