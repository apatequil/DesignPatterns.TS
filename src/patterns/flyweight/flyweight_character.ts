import { IPrintableFlyweight } from './flyweights'

export class FlyweightCharacter {
  constructor(
    public value: string,
    // We could have the flyweight be of type TextFlyweight but it's better
    // to program against abstractions. Anything that implements IPrintableFlyweight
    // is valid here. We just happen to be using TextFlyweight concretes.
    public readonly flyweight: IPrintableFlyweight,
  ) { }

  print = (): void => {
    // Makes use of flyweight's operation rather than a character
    // since the flyweight has the information needed. This way
    // we pass the value into the flyweight to accomplish the same
    // thing as if the data was internal to the character
    this.flyweight.print(this.value)
  }
}
