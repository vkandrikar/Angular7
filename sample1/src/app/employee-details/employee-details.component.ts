import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let emp of employeeList">
      <li>{{emp.id + "-" + emp.age + "-" + emp.name}}</li>
    </ul>
  `,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeList = [];

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.employeeList = this.empService.fnGetEmployee();
  }

}
