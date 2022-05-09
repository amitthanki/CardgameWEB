import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http : HttpClient) { }

  getRandomCards() : Observable<any>{
    return this.http.get('http://localhost:5051/api/Deck');
  }
}
