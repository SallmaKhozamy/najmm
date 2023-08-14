import { SharedService } from './../../shared.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   // Initialize the flag to false (no radio selected)
   constructor(private sharedService:SharedService) { }
   isAnyRadioChecked =false;
   ngOnInit(): void {
      this.hideDiv();
  }
   
  //  complaints = [
  //   {id: 1, name:'ملخص تقييم الاضرار', img:'bi bi-file-earmark-image-fill'},
  //   {id: 2, name:'الابلاغ عن حادث', img:''},
  //   {id: 5, name:'بلاغ عن احتيال', img:'bi bi-exclamation-octagon-fill'},
  //   {id: 3, name:'احقيه خصم تامين السيارات', img:''},
  //   {id: 4, name:'صيانه السيارة', img:''}
  // ];

    // Function to handle radio change
    handleRadioChange(event: Event): void {
    const selectedRadio = event.target as HTMLInputElement;
    this.isAnyRadioChecked = selectedRadio.checked;
    }

    hideDiv() {
      this.sharedService.setflag(false);
    }
}
