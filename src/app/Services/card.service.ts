import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient) { }

  getRandomCards() : Observable<any>{
    return this.http.get('https://cardplaygame.azurewebsites.net/api/Deck');
  }
  getSortedResult(card:any[]) : Observable<any>{
    return this.http.post('https://cardplaygame.azurewebsites.net/api/Cards',card);
  }
}
