import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  template: `
    <h3>You have selected department with id = {{deptId}}</h3>

    <p>
      <button (click)="fnShowChildComp('overview')"> Overview </button>
      <button (click)="fnShowChildComp('contact')"> Contact </button>
    </p>
    <router-outlet></router-outlet>
    
    <p>
      <button (click)="fnHandleDeptNavigation('prev')"> Prev </button>
      <button (click)="fnHandleDeptNavigation('next')"> Next </button>
    </p>

    <p>
      <button (click)=fnHandleBack()> Back </button>
    </p>
  `,
  styles: []
})
export class DepartmentDetailsComponent implements OnInit {

  public deptId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.deptId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.deptId = parseInt(params.get('id'));
    });
  }

  fnHandleDeptNavigation(btn) {
    if(btn == 'prev')
      this.deptId--;
    else
      this.deptId++;
    
    this.router.navigate(['/department', this.deptId]);
  }

  fnHandleBack() {
    //this.router.navigate(['/department', {selectedId: this.deptId}]);
    this.router.navigate(['../', {selectedId: this.deptId}], {relativeTo: this.route});
  }

  fnShowChildComp(comp) {
    this.router.navigate([comp], {relativeTo: this.route});
  }
}
