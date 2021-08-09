import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { DictionaryService } from 'src/app/dictionary.service';
import { MeaningModel } from '../model/dictionary.model';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.scss']
})
export class MeaningComponent implements OnInit {
  @Output() currentWordDefEvent: EventEmitter<boolean> = new EventEmitter();
  words: any;
  currentWordDef: MeaningModel = new MeaningModel();
  eventsSubject: Subject<boolean> = new Subject<boolean>();


  constructor(private dictionaryService: DictionaryService) {

  }

  ngOnInit(): void {
    this.words = this.dictionaryService.getWords()
  }

  showWord(wordId: string) {
    for (let value of this.words) {
      if (value.wordId === wordId) {
        this.currentWordDef = value;
        this.eventsSubject.next(true);
      }
    }
  }

  resetDef() {
    this.currentWordDef.imgUrl = undefined;
    this.currentWordDef.def = "";
  }

}
