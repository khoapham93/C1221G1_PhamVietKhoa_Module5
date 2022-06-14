import {Injectable} from '@angular/core';
import {Word} from "../model/word";
import {element} from "protractor";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: Word[] = [
    {
      word: 'Hello',
      mean: 'Xin chào'
    },
    {
      word: 'Love',
      mean: 'Yêu'
    },
    {
      word: 'Dictionary',
      mean: 'Từ điển'
    },
    {
      word: 'Bottle',
      mean: 'Chai'
    }, {
      word: 'Box',
      mean: 'Hộp'
    },
    {
      word: 'Table',
      mean: 'Bảng'
    },

  ];

  constructor() {
  }

  public getAll() {
    return this.words;
  }

  public findByWord(word: string) {
    return this.words.find(element => element.word == word);
  }
}
