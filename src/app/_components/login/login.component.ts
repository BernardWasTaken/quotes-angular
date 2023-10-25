import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/_api/api.service';
import { GlobalsService } from 'src/app/_auth/globals.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private apiService: ApiService, private router: Router, private authService: GlobalsService) {}

  afterLogin(): void{
    this.authService.setAuthenticated(true);
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
