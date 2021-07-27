import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { LettersComponent } from './sections/letters/letters.component';
import { MeaningComponent } from './sections/meaning/meaning.component';
import { WordsComponent } from './sections/words/words.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(LettersComponent) lettersComponent: LettersComponent;
  @ViewChild(WordsComponent) wordsComponent: WordsComponent;
  @ViewChild(MeaningComponent) meaningComponent: MeaningComponent;
  // @ViewChild(WordsComponent, { static: false })
  // wordsComponent: WordsComponent;
  // @ViewChild(MeaningComponent, { static: false })
  // meaningComponent: MeaningComponent;
  constructor() { }

  ngAfterViewInit() { }

  showWords(letterId: string) {
    this.wordsComponent.showWords(letterId);
    this.meaningComponent.resetDef()
  }

  showWord(wordId: string) {
    this.meaningComponent.showWord(wordId)
  }


  title = 'dictionary';
}
