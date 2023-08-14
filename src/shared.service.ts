import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private flagSource = new BehaviorSubject<boolean>(false); 
  flag$ = this.flagSource.asObservable();

   setflag(flag: boolean) {
    this.flagSource.next(flag);
   }
}
