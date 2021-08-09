import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DictionaryService } from 'src/app/dictionary.service';
import { MeaningModel, SearchWordModel } from '../model/dictionary.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  wordToSearch: string;
  meaningResult: SearchWordModel[];
  searchWord: any;
  errorMessage: string;
  @Input() events: Observable<boolean>;
  existanceOfMeaning: boolean = false;
  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.events.subscribe((val) => {
      this.existanceOfMeaning = val;
    })
  }

  searchMeaning() {
    this.dictionaryService.searchWord(this.wordToSearch.toLowerCase().trim())
      .subscribe((result: SearchWordModel[]) => {
        this.meaningResult = result;
        // this.parseResult(this.meaningResult)
        // console.log(this.wordToSearch);
        // console.log(this.meaningResult);
      },
        err => {
          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        })
  }


}
