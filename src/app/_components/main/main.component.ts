import { Component } from '@angular/core';
import { ApiService } from 'src/app/_api/api.service';

interface quote{
  quote: String,
  author: String,
  category: String
}


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  quote: String = ""

  constructor(private apiService: ApiService) {
    
  }

  readResponse(): void{
    let requestItem: quote = {quote: '', author:'', category:''}
    this.apiService.getRandomQuote().subscribe(data => {
      requestItem.quote = data[0].quote
      requestItem.author = data[0].author
      requestItem.category = data[0].category
      
      
      const elementI = document.getElementById('i') as HTMLElement
      const elementH = document.getElementById('h') as HTMLElement
      const elementH2 = document.getElementById('h2') as HTMLElement

      elementI.textContent = '"'+requestItem.quote+'"' as string
      elementH.textContent = requestItem.category as string
      elementH2.textContent = "-"+requestItem.author as string
    })
  }
}
