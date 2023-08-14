import { Router } from '@angular/router';
import { SharedService } from './../../shared.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

 constructor(private sharedService: SharedService) { }

ngOnInit(): void {
   this.showDiv();
}

showDiv() {
  this.sharedService.setflag(true);
}
}