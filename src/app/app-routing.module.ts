import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeePortalComponent } from './employee-portal/employee-portal.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'employee-portal', component: EmployeePortalComponent },
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
