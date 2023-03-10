import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8081/v1/employees';

  constructor(private httpclient: HttpClient) {}

  getEmployeeList(): Observable<Employee[]> {
    return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.httpclient.post(`${this.baseUrl}`, employee);
  }

  update(employee: Employee, id: number): Observable<Object> {
    return this.httpclient.put(`${this.baseUrl}/${id}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.httpclient.get<Employee>(`${this.baseUrl}/${id}`);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.httpclient.delete<Employee>(`${this.baseUrl}/${id}`);
  }
}
