import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  dictionary = {} as Word;
  word: string;

  constructor(private activatedRoute: ActivatedRoute,
              private dictionaryService: DictionaryService) {
  }

  ngOnInit(): void {
    this.word = this.activatedRoute.snapshot.params.word;
    this.dictionary = this.dictionaryService.findByWord(this.word);
  }

}
