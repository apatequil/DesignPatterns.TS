import { TextFlyweight } from "./flyweights";

export class FlyweightCharacter {
    constructor(value: string,
        position: { cols: number; rows: number },
        // Stores a reference to flyweight data rather
        // that storing the data directly
        sharedState: TextFlyweight) { }
}
