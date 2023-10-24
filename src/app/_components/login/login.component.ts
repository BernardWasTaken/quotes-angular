import { Component } from '@angular/core';
import { ApiService } from 'src/app/_api/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private apiService: ApiService) {}

  onLogin(username: string, password: string): void{
    this.apiService.checkLoginCredentials(username, password);
  }

}
