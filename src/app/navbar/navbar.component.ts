import { SharedService } from './../../shared.service';
import { Component,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy{
  flag = false;  
  private flagSubscription: Subscription;
 
constructor(private sharedService: SharedService) {
  this.flagSubscription = this.sharedService.flag$.subscribe(flag => {
    this.flag = flag;
  });
 }
  ngOnDestroy(){
    this.flagSubscription.unsubscribe();
  }
  }
