import { Chalk as FontColor } from 'chalk'
import { terminal } from '../../lib/ui'
import { ITextFlyweight, TextFlyweight } from './flyweights/text'

export class TextFactory {
  public readonly characterCache: { [key: string]: ITextFlyweight } = <any>{}

  getText(
    name: string,
    fontFamily: string,
    fontColor: string,
    enableDebug: boolean = false,
  ): ITextFlyweight {
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
      const newChar: ITextFlyweight = new TextFlyweight(name, fontFamily, fontColor)
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
