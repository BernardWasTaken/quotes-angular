import { AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import { ApiService } from 'src/app/_api/api.service';

interface User {
  username: string;
  email: string;
  date_joined: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements AfterViewInit {

  constructor(private apiService: ApiService) {
    
  }

  ngAfterViewInit(): void {
    var user: User = {
      username: '',
      email: '',
      date_joined: ''
    }

    

    this.apiService.getAllUsers().subscribe(data => {
      data.forEach((item: { username: any; email: any, date_joined: any }) => {
        user = {
          username: item.username,
          email: item.email,
          date_joined: item.date_joined
        };

        const usernameElement = document.getElementById('username')
        const emailElement = document.getElementById('email')
        const dateJoinedElement = document.getElementById('date-joined')

        usernameElement!.textContent = user.username
        emailElement!.textContent = user.email
        dateJoinedElement!.textContent = user.date_joined
      })
    })
  }
}
