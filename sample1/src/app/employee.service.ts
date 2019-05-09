import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public employeeList = [
    {"id": 1, "name": "vijay", "age": 32},
    {"id": 1, "name": "ruplai", "age": 27},
    {"id": 1, "name": "abc", "age": 35}
  ];
  
  constructor() { }

  fnGetEmployee() {
    return this.employeeList;
  }
}
