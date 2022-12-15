import chalk, { Chalk as FontColor } from 'chalk'
import { terminal } from '../../lib/ui'
import { IPrintableFlyweight, TextFlyweight } from './flyweights/text'

export class CharacterFactory {
  public readonly characterCache: { [key: string]: IPrintableFlyweight } = <any>{}

  getCharacter(
    name: string,
    fontFamily: string,
    fontColor: string,
    enableDebug: boolean = false,
  ): IPrintableFlyweight {
    const characterKey = this.buildKey(name, fontFamily, fontColor)
    if (this.characterCache[characterKey]) {
      if (enableDebug) {
        terminal.print(`Using existing flyweight for ${characterKey}`)
      }
      return this.characterCache[characterKey]
    } else {
      if (enableDebug) {
        terminal.print(`Existing flyweight for ${characterKey} not found, creating`)
      }
      const newChar: IPrintableFlyweight = new TextFlyweight(name, fontFamily, fontColor)
      this.characterCache[characterKey] = newChar

      return newChar
    }
  }

  buildKey(name: string, fontFamily: string, fontColor: string): string {
    // Our key for this example is just a string with the properties separated by _
    return `${name.replace(' ', 'space')}_${fontFamily.replace(' ', '_')}_${fontColor}`
  }

  printCharacterCache(includeCount: boolean = true, fontColor?: FontColor): void {
    let flyweightCount = 0
    for (const key in this.characterCache) {
      terminal.print(` ${key}`, true)
      flyweightCount++
    }

    if (includeCount) {
      terminal.print(`${flyweightCount} total flyweights`)
    }
  }
}
