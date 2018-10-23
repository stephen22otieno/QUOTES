import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  Quotes=[
    new Quotes ('If you see something, say something!', 'Katana',0,0,),
    new Quotes ('Dont wait for it to happen,make it happen!',  'Cliff',0,0), 
    new Quotes ('Before your react,think. Before you quit,try!', 'Steve',0,0),
    new Quotes ('If you rest,you rust!', 'Peter',0,0),
  ]
  constructor() { }

  ngOnInit() {
  }
  like(i){
    this.Quotes[i].likes+=1
  }
  dislike(i){
    this.Quotes[i].dislikes+=1
  }
  Delete(i){
    this.Quotes.splice(i,1)
  }
new(quote){
  this.Quotes.push(quote);
}
}
