import { Component, OnInit } from '@angular/core';
import { DictionaryService } from 'src/app/dictionary.service';
import { MeaningModel } from '../model/dictionary.model';

@Component({
  selector: 'app-meaning',
  templateUrl: './meaning.component.html',
  styleUrls: ['./meaning.component.scss']
})
export class MeaningComponent implements OnInit {
  words: any;
  currentWordDef: MeaningModel = new MeaningModel();;

  constructor(private dictionaryService: DictionaryService) {
    this.words = this.dictionaryService.getWords()
  }

  ngOnInit(): void {
  }

  showWord(wordId: string) {
    for (let value of this.words) {
      if (value.wordId === wordId) {
        this.currentWordDef = value
      }
    }
  }

  resetDef() {
    this.currentWordDef.imgUrl = undefined;
    this.currentWordDef.def = "";
  }

}
