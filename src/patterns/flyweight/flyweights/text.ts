import { terminal } from '../../../lib/ui/'

export interface IPrintableFlyweight {
  name: string
  fontFamily: string
  fontColor: string
  print: (value: string, cursor?: { cols?: number; rows?: number }) => void
}

export class TextFlyweight implements IPrintableFlyweight {
  constructor(readonly name: string, readonly fontFamily: string, readonly fontColor: string) {}
  print(value: string) {
    // Print the text to the screen. We'd use the extrinsic data
    // from this flyweight with the intrinsic data passed in
    terminal.print(value, false)
  }
}
