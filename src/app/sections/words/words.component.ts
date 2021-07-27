import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DictionaryService } from 'src/app/dictionary.service';
import { WordModel } from '../model/dictionary.model';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss']
})
export class WordsComponent implements OnInit {
  @Output() wordIdForDef: EventEmitter<string> = new EventEmitter();
  letters: Array<object>;
  words: any;
  currentWords: WordModel[];

  constructor(private dictionaryService: DictionaryService) {
    this.words = this.dictionaryService.getWords()
  }

  ngOnInit(): void {
  }

  showWords(letterId: string) {
    this.currentWords = []
    for (let value of this.words) {
      if (value.id === letterId) {
        this.currentWords.push(value)
      }
    }
  }

  sendWordId(wordId: string | undefined) {
    this.wordIdForDef.emit(wordId)
  }


}
