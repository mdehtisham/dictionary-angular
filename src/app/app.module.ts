import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LettersComponent } from './sections/letters/letters.component';
import { WordsComponent } from './sections/words/words.component';
import { MeaningComponent } from './sections/meaning/meaning.component';
import { SearchComponent } from './sections/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    LettersComponent,
    WordsComponent,
    MeaningComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
