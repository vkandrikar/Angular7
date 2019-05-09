import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { WildCardComponent } from './wild-card/wild-card.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

const routes: Routes = [
  {path: '', redirectTo: '/department', pathMatch: 'full'},
  {path: 'department', component: DepartmentListComponent},
  {
    path: 'department/:id', 
    component: DepartmentDetailsComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]
  },
  {path: 'employee', component: EmployeeListComponent},
  {path: '**', component: WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const compList = [
  DepartmentListComponent, 
  DepartmentDetailsComponent, 
  DepartmentOverviewComponent, 
  DepartmentContactComponent, 
  EmployeeListComponent, 
  WildCardComponent
];