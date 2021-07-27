import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DictionaryService } from 'src/app/dictionary.service';


@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent implements OnInit {
  @Output() letterIdForWord: EventEmitter<string> = new EventEmitter();
  letters: any;
  // words: any
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.letters = this.dictionaryService.getLetters()
    // this.words = this.dictionaryService.getWords()
  }

  sendLetterId(letterId: string) {
    this.letterIdForWord.emit(letterId)
    console.log(letterId)
  }

}
