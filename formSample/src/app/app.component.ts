import { Component } from '@angular/core';
import { UserData } from './UserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public topicArr = ["Angular", "Java", "NodeJS"];
  //public userData = new UserData('Vijay Kandrikar', 'vijay@kandrikar.com', 8390786524, 'Java', 'Male', true);
  public userData = new UserData();
}
