// Example program using Flyweight design pattern
import { terminal } from "../lib/ui/";
import { CharacterFactory } from "../patterns/flyweight";
import { sizeOfObject } from "../lib/profiler/memory";

const vowels = ['a', 'e', 'i', 'o', 'u']
const factory = new CharacterFactory()
const includeSizeBreakdown = false
function runDesignPatternExample() {
  terminal.print(`==================================`);
  terminal.print(`||   Flyweight Design Pattern   ||`);
  terminal.print(`==================================`);

  // Scenario 1: demonstrate reduced memory usage with a typical sentence
  const document = "This is a message. There are many like it but this one is mine.".toLowerCase()
  // Scenario 2: Demonstrate large memory savings with a lot of repetition
  //const document = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

  terminal.print(`Message to process:`)
  terminal.print(` ${document}`)
  processMessage(document)

  let characterCounts: { [key: string]: number } = {};
  // Simply creating an aggregate count of each character which will be used
  // for profiling memory requirements
  for (let s of document) if (!characterCounts[s]) characterCounts[s] = 1; else characterCounts[s] = characterCounts[s] + 1;


  const { sizeWithoutFlyweight, sizeWithFlyweight } = calculateMemoryStatistics(characterCounts, includeSizeBreakdown)
  // const totalSizeWitFlyweights = calculateFlyweightMemory(characterCounts)
  // const totalSizeSaved = totalSizeWithoutFlyweights - totalSizeWitFlyweights

  terminal.print(`Memory Profile:`)
  terminal.print(`  Without Flyweights: ${sizeWithoutFlyweight} bytes`)
  terminal.print(`  With Flyweights: ${sizeWithFlyweight} bytes`)
  terminal.print(`  Memory savings: ${sizeWithoutFlyweight - sizeWithFlyweight} bytes`)

}

// Process message takes in a string and then runs it through
// the flyweight factory to generate any new flyweights needed
// to support the message
const processMessage = (message: string): void => {
  [...message].forEach(character => {
    // For demonstration purposes, we'll set vowels to arial green and consanants to arial brown
    // In a real-life scenario, there would be thousands of potential flyweights covering different
    // combinations of fonts and colors
    const characterFont = getCharacterFont(character)
    const characterColor = getCharacterColor(character)

    // We don't really care about the return, we're just populating the flyweights here
    factory.getCharacter(character, characterFont, characterColor)
  });
}


const calculateMemoryStatistics = (characterCounts: { [key: string]: number }, includeDetailedCount: boolean = false): { sizeWithoutFlyweight: number, sizeWithFlyweight: number } => {
  let runningSizeWithFlyweightTotal = 0
  let runningSizeWithoutFlyweightTotal = 0
  for (const ch in characterCounts) {
    // To calculate total memory for a given number of a specific characters without flyweight
    // (size of character including flyweight data since each char is a whole object without flyweights) * number of the character
    const nonFlyweightTotalSize = sizeOfObject({ name: ch, fontFamily: getCharacterFont(ch), fontColor: getCharacterColor(ch) }) * characterCounts[ch]
    const flyweightTotalSize = (sizeOfObject(ch) * characterCounts[ch]) + sizeOfObject(factory.getCharacter(ch, getCharacterFont(ch), getCharacterColor(ch)))
    if (includeDetailedCount) {
      console.log(`Total Size for ${characterCounts[ch]} ${ch}: ${nonFlyweightTotalSize} bytes (Non-Flyweight)`)
      console.log(`Total Size for ${characterCounts[ch]} ${ch}: ${flyweightTotalSize} bytes (Flyweight)`)
    }
    runningSizeWithoutFlyweightTotal += nonFlyweightTotalSize
    runningSizeWithFlyweightTotal += flyweightTotalSize
  }

  return {
    sizeWithoutFlyweight: runningSizeWithoutFlyweightTotal,
    sizeWithFlyweight: runningSizeWithFlyweightTotal
  }
}

// Simple helper functions to get color and font based on whether
// a character is a vowel (just for demo purposes)
const getCharacterColor = (character: string): string => {
  return vowels.includes(character) ? 'arial' : 'arial'
}

const getCharacterFont = (character: string): string => {
  return vowels.includes(character) ? 'green' : 'brown'
}

runDesignPatternExample();
