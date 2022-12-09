import { ICharacter } from './character'

export class Characters {
  characterLookup: { [key: string]: ICharacter }

  getOrAddCharacter(char: string, key: string): ICharacter {
    if (this.characterLookup[key]) {
      return this.characterLookup[key]
    } else {
      const newChar = {
        character: char,
      }
      this.characterLookup[key] = newChar

      return newChar
    }
  }
}
