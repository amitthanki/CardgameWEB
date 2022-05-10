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
  public sourceList: any[] = []

  public targetList: any[] = []
  public sortedCardList: any[] = []
  ngOnInit() {
    this.cardServices.getRandomCards().subscribe(res=>{
      console.log("res",res);
      this.sourceList = res;
    },error => {
            console.log(error);
    });
        
   
}
sortCard(){
  this.cardServices.getSortedResult(this.targetList).subscribe(res=>{
    console.log("res",res);
    this.sortedCardList = res;
  },error => {
          console.log(error);
  });
}
}
