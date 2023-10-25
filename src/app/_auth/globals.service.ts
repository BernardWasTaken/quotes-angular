import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalsService {

  private isLoggedIn = false

  constructor() { }

  getAuthenticated(): boolean{
    return this.isLoggedIn;
  }

  setAuthenticated(value: boolean): void{
    this.isLoggedIn = value;
  }
}
