// Example program using Flyweight design pattern
import { terminal } from '../lib/ui/'
import { CharacterFactory } from '../patterns/flyweight'
import { sizeOfObject } from '../lib/profiler/memory'
import { Document } from '../patterns/flyweight'

const includeSizeBreakdown = false
function runDesignPatternExample() {
  terminal.print(`==================================`)
  terminal.print(`||   Flyweight Design Pattern   ||`)
  terminal.print(`==================================`)

  const message = 'This is a message. There are many like it but this one is mine.'.toLowerCase()
  // Scenario 1: demonstrate reduced memory usage with a typical sentence

  // Scenario 2: Demonstrate large memory savings with a lot of repetition
  //const message = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

  terminal.print(`Message to process:`)
  terminal.print(` ${message}`)

  const document = new Document(message)
  document.printContents()

  const { sizeWithoutFlyweight, sizeWithFlyweight } =
    document.calculateMemoryStatistics(includeSizeBreakdown)

  terminal.print(`Memory Profile:`)
  terminal.print(`  Without Flyweights: ${sizeWithoutFlyweight} bytes`)
  terminal.print(`  With Flyweights: ${sizeWithFlyweight} bytes`)
  terminal.print(`  Memory savings: ${sizeWithoutFlyweight - sizeWithFlyweight} bytes`)
}

runDesignPatternExample()
