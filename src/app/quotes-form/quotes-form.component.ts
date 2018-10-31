import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {
  newQuote = new Quotes("", "", 0, 0)
  @Output() newAdd = new EventEmitter();

  addQuote() {
    this.newAdd.emit(this.newQuote);
    this.newQuote = new Quotes("", "", 0, 0)
  }


  constructor() { }

  ngOnInit() {
  }

}
