import { Component } from '@angular/core';
import { CardService } from './Services/card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cardServices: CardService){

  }
  public list1: any[] = []

  public list2: any[] = []
  ngOnInit() {
    this.cardServices.getRandomCards().subscribe(res=>{
      console.log("res",res);
      this.list1 = res;
    })
  //  this.list1 = []
    this.list2 = []
    console.log("ffd",this.list2)
}
}
