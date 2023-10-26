import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  constructor(private router: Router) { }

  getAuthenticated(): boolean{
    if(localStorage.getItem("username")){
      return true;
    }
    return false;
  }


  setAuthenticated(username: string): void{
    localStorage.setItem("username", username);
  }


  destroyAuthentication(): void{
    localStorage.removeItem("username");
    this.router.navigate(['/login']);
  }
}
