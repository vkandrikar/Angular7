import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
    <h2>Employee Details</h2>
    {{serviceErr}}
    <ul *ngFor="let emp of employeeList">
      <li>{{emp.id + "-" + emp.age + "-" + emp.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employeeList = [];
  public serviceErr = "";

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empService.fnGetEmployee()
      .subscribe(
        data => this.employeeList = data,
        error => this.serviceErr = error
      );
  }

}
