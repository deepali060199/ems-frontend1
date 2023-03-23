import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-employee-portal',
  templateUrl: './employee-portal.component.html',
  styleUrls: ['./employee-portal.component.css'],
})
export class EmployeePortalComponent implements OnInit {
  employee: Employee = new Employee();
  id: number = 0;
  constructor(
    private employeeService: EmployeeService,

    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
  }

  // getByNameOrId(arg: string) {
  //   // search by Id
  //   this.employeeService.getEmployeeById(Number(arg)).subscribe((data) => {
  //     this.employee = data;
  //     console.log(data);
  //   });
  // }
}
