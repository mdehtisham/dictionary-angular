import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  letters = [
    { "id": "1", "value": "A" },
    { "id": "2", "value": "B" },
    { "id": "3", "value": "C" },
    { "id": "4", "value": "D" },
    { "id": "5", "value": "E" },
    { "id": "6", "value": "F" },
    { "id": "7", "value": "G" },
    { "id": "8", "value": "H" },
    { "id": "9", "value": "I" },
    { "id": "10", "value": "J" },
    { "id": "11", "value": "K" },
    { "id": "12", "value": "L" },
    { "id": "13", "value": "M" },
    { "id": "14", "value": "N" },
    { "id": "15", "value": "O" },
    { "id": "16", "value": "P" },
    { "id": "17", "value": "Q" },
    { "id": "18", "value": "R" },
    { "id": "19", "value": "S" },
    { "id": "20", "value": "T" },
    { "id": "21", "value": "U" },
    { "id": "22", "value": "V" },
    { "id": "23", "value": "W" },
    { "id": "24", "value": "X" },
    { "id": "25", "value": "Y" },
    { "id": "26", "value": "Z" }
  ]

  words = [
    { "id": "1", "wordId": "11", "word": "Apple", "imgUrl": "assets/apple.jpg", "def": "Apple is a fruit" },
    { "id": "1", "wordId": "12", "word": "Axe", "imgUrl": "assets/axe.jpg", "def": "Axe is a tool" },
    { "id": "1", "wordId": "13", "word": "Avocado", "imgUrl": "assets/avocado.jpg", "def": "Avocado is a fruit" },
    { "id": "2", "wordId": "21", "word": "Banana", "imgUrl": "assets/banana.jpg", "def": "Banana is a fruit" },
    { "id": "2", "wordId": "22", "word": "Bat", "imgUrl": "assets/bat.jpg", "def": "Bat is an animal" },
    { "id": "2", "wordId": "23", "word": "Ball", "imgUrl": "assets/ball.jpg", "def": "Ball is a toy" },
    { "id": "3", "wordId": "31", "word": "Cat", "imgUrl": "assets/cat.jpg", "def": "Cat is a pet" },
    { "id": "3", "wordId": "32", "word": "Cow", "imgUrl": "assets/cow.jpg", "def": "Cow is a domestic animal" },
    { "id": "3", "wordId": "33", "word": "City", "imgUrl": "assets/city.jpg", "def": "City is a place where people live" }
  ]

  constructor() { }

  getLetters() {
    return this.letters
  }

  getWords() {
    return this.words
  }

}
