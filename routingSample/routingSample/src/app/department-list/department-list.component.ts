import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <ul>
      <li (click)=fnHandleClick(i) [class.selected]=fnCheckSelectedDept(i) *ngFor = "let val of departmentArr; index as i">{{i}} {{val}}</li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedDeptId;
  public departmentArr = ["Depart1", "Depart2", "Depart3", "Depart4"];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.selectedDeptId = parseInt(params.get('selectedId'));
    });
  }

  fnHandleClick(deptId) {
    //this.router.navigate(['/department', deptId]);
    this.router.navigate([deptId], {relativeTo: this.route});
  }

  fnCheckSelectedDept(id) {
    return id === this.selectedDeptId;
  }
}
