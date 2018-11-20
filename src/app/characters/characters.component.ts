import { Component, OnInit } from '@angular/core';
import { Character } from '../../character';
import { CHARACTERS } from '../../mock-characters';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {

  public characters = CHARACTERS;

  selectedCharacter: Character;

  constructor() { }

  ngOnInit() {
    return this.characters[0].characters; // Return the characters on the initialization
  }

  onSelect(character: Character): void {
    this.selectedCharacter = character;
  }
}
