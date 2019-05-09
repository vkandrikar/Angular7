import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  template: `
    <div>
      This is page 1

      <h3>Interpolation</h3>
      <h2> Welcome {{name}}</h2>
      <h2>2+2 = {{2+2}}</h2>
      <h2>{{"Hi " + name}}</h2>
      <h2>name length = {{name.length}}</h2>
      <h2>upper case = {{name.toUpperCase()}}</h2>
      <h2>{{fnSayHello()}}</h2>

      <hr>
      <h3>Class binding</h3>
      <div class="success">Will apply green class, this is regular class</div>
      <div [class]="greenClass">Will apply class assigned to greenClass variable, this is class binding</div>
      <div class="danger" [class]="greenClass">Will give priority to class binding and apply green color. The regular class become dummy here. We have to use either of these, not both at same time.</div>
      <div [class.danger]="hasError">Will apply red color if value for hasError is true</div>
      <div [ngClass]="classObj">Will apply all property defined in classObj variable</div>


      <hr>
      <h3>Style binding: used to apply inline css</h3>
      <div [style.color]="'yellow'"> Apply yellow color</div>
      <div [style.color]="hasError?'red':'green'"> Apply red if hasError is true else green</div>
      <div [style.color]="myStyleColor">Apply color assigned to myStyleColor var</div>
      <div [ngStyle]="styleObj">Apply all property defined in styleObj</div>

      <hr>
      <h3>Event binding</h3>
      <button (click)="fnHandleClick1($event)">Log Message1</button>
      {{greeting}}

      <hr>
      <h3>Template Reference Variable</h3>
      <input #myInput type="text">
      <button (click)="fnHandleClick2(myInput.value)">Log Message2</button>

      <hr>
      <h3>Two Way Binding</h3>
      <input [(ngModel)]="myData" type="text">
      {{myData}}

      <hr>
      <h3>Property Binding</h3>
      <h4> using Interpolation</h4>
      <input type="text" value="Vijay" gender="male" id="{{myId}}">
      <br>
      <h4> using Property</h4>
      <input type="text" value="Vijay" [id]="myId">
      <br>
      <h4>Interpolation and Property work same but interpolation works with String value only</h4>

      <h4>using Interpolation this will not work</h4>
      <input type="text" value="Vijay" disabled="false">
      <input type="text" value="Vijay" disabled="{{flag}}">

      <br>
      <h4>using property this will work</h4>
      <input type="text" value="Vijay" [disabled]="false">
      <input type="text" value="Vijay" [disabled]="flag">
      <br>
      <h4>Syntax 2</h4>
      <input type="text" value="Vijay" bind-disabled="false">
      <input type="text" value="Vijay" bind-disabled="flag">
      <input type="text" value="Vijay" bind-id="myId">

      <hr>
      <h3>Structural Directives</h3>
      <h4>remove h2 from DOM</h4>
      <h2 *ngIf="false">Hello</h2>

      <h4>if else Syntax 1</h4>
      <h2 *ngIf="flag; else block12"> Data from block1</h2>
      <ng-template #block12>
        <h2> Data from block2</h2>
      </ng-template>

      <h4>if else Syntax 2</h4>
      <div *ngIf="flag; then block1; else block2"></div>
      <ng-template #block1>
        <h2> Data from block1</h2>
      </ng-template>
      <ng-template #block2>
        <h2> Data from block2</h2>
      </ng-template>

      <h3>Switch</h3>
      <div [ngSwitch]="myColor">
        <div *ngSwitchCase="'red'">You select RED</div>
        <div *ngSwitchCase="'green'">You select GREEN</div>
        <div *ngSwitchDefault>Your color not found</div>
      </div>

      <h3>simple For loop</h3>
      <div *ngFor="let val of arr">
        <h4>{{val}}</h4>
      </div>

      <h3>For loop with index</h3>
      <div *ngFor="let val of arr; index as i">
        <h4>{{i}} {{val}}</h4>
      </div>

      <h3>For loop with even, green color for true and black for false</h3>
      <div *ngFor="let val of arr; even as i">
        <h4 [style.color]="i ? 'green' : 'black' ">{{i}} {{val}}</h4>
      </div>
    </div>`,
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  public greenClass = "success";
  public hasError = true;
  public isBold = true;
  public classObj = {
    "success": !this.hasError,
    "danger": this.hasError,
    "setWeight": this.isBold
  };

  public myStyleColor = "pink";
  public styleObj = {
    "color": "blue",
    "font-style": "italic" 
  };

  public greeting = "Click event log will be displayed here.";

  public name = "Vijay";
  public myData = "";
  public flag = false;
  public myId = "testId";
  public myColor = "orange";
  public arr = ["vijay", "rupali", "jay", "harshu"];

  constructor() { }

  ngOnInit() {
  }

  fnSayHello() {
    return "inside function: Hello " + this.name;
  }

  fnHandleClick1(evt) {
    console.log(evt);
    this.greeting = "You clicked on button."
  }

  fnHandleClick2(val) {
    console.log(val);
    console.log("o/p of two way binding: " + this.myData);
  }

}
