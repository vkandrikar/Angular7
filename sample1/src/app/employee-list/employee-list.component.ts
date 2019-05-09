import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee List</h2>
    <ul *ngFor="let emp of employeeList">
      <li>{{emp.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeList = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.empService.fnGetEmployee();
  }

}
