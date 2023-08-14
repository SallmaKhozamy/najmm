import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  flag:boolean = false;
  test:boolean = true;
  getData(x:any) {this.test=x;}
}
