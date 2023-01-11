import { terminal } from '../../../lib/ui/'
import { IFlyweight } from './flyweight'

// Common interface for any text-related flyweights.
export interface ITextFlyweight extends IFlyweight {
  fontFamily: string
  fontColor: string
  print: (value: string) => void
}

// Concrete flyweight implementation example. Contains the intrinsic data of a context
// and the value passed to the operation, in this case print, is the extrinsic data.
export class TextFlyweight implements ITextFlyweight {
  constructor(readonly name: string, readonly fontFamily: string, readonly fontColor: string) {}
  print(value: string) {
    // Print the text to the screen. We'd use the extrinsic data (value)
    // passed into this flyweight in the operation along with
    // the intrinsic data stored in the flyweight (e.g. fontColor)
    terminal.print(value, false, this.fontColor)
  }
}
