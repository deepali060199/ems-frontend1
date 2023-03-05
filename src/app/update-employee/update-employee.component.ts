import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  id: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  updateEmployee() {
    this.employeeService.update(this.employee, this.id).subscribe((data) => {
      this.gotoEmployeeList();
    });
  }

  gotoEmployeeList() {
    this.router.navigate(['/employee']);
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }
  onSubmit() {
    this.updateEmployee();
  }
}
