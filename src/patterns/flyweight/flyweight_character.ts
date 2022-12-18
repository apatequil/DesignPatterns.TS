import { terminal } from '../../lib/ui'
import { IPrintableFlyweight, TextFlyweight } from './flyweights'

export class FlyweightCharacter {
  constructor(
    public value: string,
    public readonly flyweight: TextFlyweight,
  ) { }

  print = (): void => {
    // We'd use the shared state here to apply color/font/etc.. in a real
    // world
    this.flyweight.print(this.value)
  }
}
