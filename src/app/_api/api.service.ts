import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public url: String  = ""

  public value: string = ""


  constructor(private http: HttpClient) { 
    this.url = "https://api.api-ninjas.com/v1/quotes?category="
  }


  private categories = ['age',
    'alone',
    'amazing',
    'anger',
    'architecture',
    'art',
    'attitude',
    'beauty',
    'best',
    'birthday',
    'business',
    'car',
    'change',
    'communications',
    'computers',
    'cool',
    'courage',
    'dad',
    'dating',
    'death',
    'design',
    'dreams',
    'education',
    'environmental',
    'equality',
    'experience',
    'failure',
    'faith',
    'family',
    'famous',
    'fear',
    'fitness',
    'food',
    'forgiveness',
    'freedom',
    'friendship',
    'funny',
    'future',
    'god',
    'good',
    'government',
    'graduation',
    'great',
    'happiness',
    'health',
    'history',
    'home',
    'hope',
    'humor',
    'imagination',
    'inspirational',
    'intelligence',
    'jealousy',
    'knowledge',
    'leadership',
    'learning',
    'legal',
    'life',
    'love',
    'marriage',
    'medical',
    'men',
    'mom',
    'money',
    'morning',
    'movies',
    'success']

  getRandomQuote(): Observable<any>{
    const apiReturn = this.http.get(this.url+this.categories[Math.floor(Math.random() * this.categories.length)], {headers: new HttpHeaders().set("X-Api-Key", "43iaH7MVUUxvxV4izuGCeQ==R6wmFW5FK3ZSLuWc")});
    return apiReturn
  }

  checkLoginCredentials(username: string, password: string){

    const url = 'http://localhost:3000/users/login';

    const body = {
      "username": username,
      "password": password
    }

    return this.http.post(url, body);
  }

  getAllUsers(): Observable<any>{
    const url = 'http://localhost:3000/users';

    return this.http.get(url);
  }

  getAllQuotes(): Observable<any>{
    return this.http.get("http://localhost:3000/quotes");
  }
}
