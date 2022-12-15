import { sizeOfObject } from '../../lib/profiler/memory'
import { terminal } from '../../lib/ui'
import { CharacterFactory } from './character-factory'
import { FlyweightCharacter } from './flyweight_character'

const vowels = ['a', 'e', 'i', 'o', 'u']

export class Document {
  factory = new CharacterFactory()
  contents: FlyweightCharacter[] = []

  constructor(documentContents: string) {
    this.contents = this.load(documentContents)
  }

  load = (message: string): FlyweightCharacter[] => {
    const result: FlyweightCharacter[] = []
    ;[...message].forEach(character => {
      // For demonstration purposes, we'll set vowels to arial green and consanants to arial brown
      // In a real-life scenario, there would be thousands of potential flyweights covering different
      // combinations of fonts and colors
      const characterFont = this.getCharacterFont(character)
      const characterColor = this.getCharacterColor(character)

      result.push(
        new FlyweightCharacter(
          character,
          { cols: 0, rows: 0 },
          this.factory.getCharacter(character, characterFont, characterColor),
        ),
      )
    })

    return result
  }

  // Simulating a user appending to the document, demonstrating the existing
  // flyweights are valid and still used
  add = (message: string): void => {
    ;[...message].forEach(character => {
      // For demonstration purposes, we'll set vowels to arial green and consanants to arial brown
      // In a real-life scenario, there would be thousands of potential flyweights covering different
      // combinations of fonts and colors
      const characterFont = this.getCharacterFont(character)
      const characterColor = this.getCharacterColor(character)

      this.contents.push(
        new FlyweightCharacter(
          character,
          { cols: 0, rows: 0 },
          this.factory.getCharacter(character, characterFont, characterColor),
        ),
      )
    })
  }

  calculateMemoryStatistics = (
    includeDetailedCount: boolean = false,
  ): { sizeWithoutFlyweight: number; sizeWithFlyweight: number } => {
    let runningSizeWithFlyweightTotal = 0
    let runningSizeWithoutFlyweightTotal = 0

    const characterCounts = this.getCharacterCounts()

    for (const ch in characterCounts) {
      // To calculate total memory for a given number of a specific characters without flyweight
      // (size of character including flyweight data since each char is a whole object without flyweights) * number of the character
      const nonFlyweightTotalSize =
        sizeOfObject({
          name: ch,
          fontFamily: this.getCharacterFont(ch),
          fontColor: this.getCharacterColor(ch),
        }) * characterCounts[ch]
      const flyweightTotalSize =
        sizeOfObject(ch) * characterCounts[ch] +
        sizeOfObject(
          this.factory.getCharacter(ch, this.getCharacterFont(ch), this.getCharacterColor(ch)),
        )
      if (includeDetailedCount) {
        console.log(
          `Total Size for ${characterCounts[ch]} ${ch}: ${nonFlyweightTotalSize} bytes (Non-Flyweight)`,
        )
        console.log(
          `Total Size for ${characterCounts[ch]} ${ch}: ${flyweightTotalSize} bytes (Flyweight)`,
        )
      }
      runningSizeWithoutFlyweightTotal += nonFlyweightTotalSize
      runningSizeWithFlyweightTotal += flyweightTotalSize
    }

    return {
      sizeWithoutFlyweight: runningSizeWithoutFlyweightTotal,
      sizeWithFlyweight: runningSizeWithFlyweightTotal,
    }
  }

  // Simple helper functions to get color and font based on whether
  // a character is a vowel (just for demo purposes)
  getCharacterColor = (character: string): string => {
    return vowels.includes(character) ? 'arial' : 'arial'
  }
  getCharacterFont = (character: string): string => {
    return vowels.includes(character) ? '#00BB00' : '#AA6600'
  }

  getCharacterCounts = (): { [key: string]: number } => {
    let characterCounts: { [key: string]: number } = {}
    // Simply creating an aggregate count of each character which will be used
    // for profiling memory requirements
    for (let i = 0; i < this.contents.length; i = i + 1) {
      const value = this.contents[i].value
      if (!characterCounts[value]) characterCounts[value] = 1
      else characterCounts[value] = characterCounts[value] + 1
    }

    return characterCounts
  }

  printContents = (): void => {
    for (let i = 0; i < this.contents.length; i = i + 1) {
      this.contents[i].print()
    }
    terminal.print('')
  }
}
