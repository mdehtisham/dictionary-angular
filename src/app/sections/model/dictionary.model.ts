export class MeaningModel {
  "wordId": string;
  "imgUrl": any;
  "def": string;
}
export class WordModel {
  "id": string;
  "wordId": string;
  "word": string;
}
export class SearchWordModel {
  "word": string;
  "meanings": SearchWordMeaningModel[]
}

export class SearchWordMeaningModel {
  "partOfSpeech": string;
  "definitions": defenition[]
}

export class defenition {
  "definition": string;
  "synonyms": string[];
  "example": string;
}



