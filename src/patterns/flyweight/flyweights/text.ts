import { terminal } from '../../../lib/ui/'

export interface IPrintableFlyweight {
  name: string
  fontFamily: string
  fontColor: string
  print: (value: string) => void
}

export class TextFlyweight implements IPrintableFlyweight {
  constructor(readonly name: string, readonly fontFamily: string, readonly fontColor: string) { }
  print(value: string) {
    // Print the text to the screen. We'd use the extrinsic data
    // from this flyweight with the intrinsic data passed in. Just
    // font color is wired up as an example but other extrinsic properties
    // could be leveraged
    terminal.print(value, false, this.fontColor)
  }
}
