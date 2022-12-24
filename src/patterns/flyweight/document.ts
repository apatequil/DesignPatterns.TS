import { profiler } from '../../lib'
import { terminal } from '../../lib/ui'
import { TextFactory } from './text-factory'
import { PrintableText } from './printable-character'

const vowels = ['a', 'e', 'i', 'o', 'u']

export class Document {
  factory = new TextFactory()
  readonly contents: PrintableText[] = []

  // Allow preloading content. This can be useful if there are common
  // flyweights that are likely to be needed and you want to save the
  // creation cost later on
  constructor(documentContents: string) {
    this.load(documentContents)
  }

  load = (message: string, append = true): void => {
    const result: PrintableText[] = []
      ;[...message].forEach(character => {
        // For demonstration purposes, we'll set vowels to arial green and consanants to arial brown
        // In a real-life scenario, there would be thousands of potential flyweights covering different
        // combinations of fonts and colors
        const { characterFont, characterColor } = this.getCharacterDecorations(character)

        result.push(
          new PrintableText(
            character,
            this.factory.getText(character, characterFont, characterColor),
          ),
        )
      })

    // provide mechanism for clearing content by passing false into append parameter
    if (!append) {
      this.contents.splice(0)
    }

    this.contents.push(...result)
  }

  // Simulating a user appending to the document, demonstrating the existing
  // flyweights are valid and still used
  append = (message: string): void => {
    this.load(message)
  }

  calculateMemoryStatistics = (
    includeDetailedCount: boolean = false,
  ): { sizeWithoutFlyweight: number; sizeWithFlyweight: number } => {
    let runningSizeWithFlyweightTotal = 0
    let runningSizeWithoutFlyweightTotal = 0

    const characterCounts = this.getCharacterCounts()

    for (const ch in characterCounts) {
      const { characterFont, characterColor } = this.getCharacterDecorations(ch)
      // To calculate total memory for a given number of a specific characters *without* flyweight
      // (size of character including flyweight data since each char is a whole object without flyweights) * number of the characters
      const nonFlyweightTotalSize =
        profiler.memory.sizeOfObject({
          name: ch,
          fontFamily: characterFont,
          fontColor: characterColor,
        }) * characterCounts[ch]
      // To calculate total memory for a given number of a specific characters *with* flyweight
      // ((size of character + size of reference to flyweight)  * number of the character) + size of flyweight
      const flyweightTotalSize =
        profiler.memory.sizeOfObject(ch) * characterCounts[ch] +
        profiler.memory.sizeOfObject(this.factory.getText(ch, characterFont, characterColor))
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
  getCharacterDecorations = (
    character: string,
  ): { characterFont: string; characterColor: string } => {
    const isVowel = vowels.includes(character)
    return {
      characterFont: isVowel ? 'arial' : 'arial',
      characterColor: isVowel ? '#00BB00' : '#AA6600',
    }
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
