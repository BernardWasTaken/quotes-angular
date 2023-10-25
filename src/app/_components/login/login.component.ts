import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Route, Router } from '@angular/router';
import { ApiService } from 'src/app/_api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router) {}

  afterLogin(): void{
    this.router.navigate(['/'])
  }

  onLogin(username: string, password: string){
    this.apiService.checkLoginCredentials(username, password).subscribe(data => {
      if(data.toString()){
        this.afterLogin();
      }
    });
  }

}
