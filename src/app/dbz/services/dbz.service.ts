import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public character: Character[] = [
    {
      name: 'Camilo',
      power: 1000
    },
    {
      name: 'Crsitian',
      power: 200000
    },
    {
      name: 'Jane',
      power: 300000
    }
  ];

  onNewCharacters(characters: Character): void {
    this.character.push(characters)
  }

  onDeleteCharacter(index:number): void {
    this.character.splice(index,1)
  }
}
