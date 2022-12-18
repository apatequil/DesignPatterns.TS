// Example program using Flyweight design pattern
import { terminal } from '../../lib/ui'
import { Document } from '.'

const includeSizeBreakdown = false
export function runExample() {
    terminal.print(`==================================`)
    terminal.print(`||   Flyweight Design Pattern   ||`)
    terminal.print(`==================================`)

    // Prompt user for a message which we'll load into our document
    const message = terminal.prompt('Enter a message: ').toLowerCase() // just lower casing to reduce the number of characters for the demo but this works without doing this

    const document = new Document(message)
    terminal.print(`Message to process:`)
    document.printContents()

    const { sizeWithoutFlyweight, sizeWithFlyweight } =
        document.calculateMemoryStatistics(includeSizeBreakdown)

    terminal.print(`Memory Profile:`)
    terminal.print(`  Without Flyweights: ${sizeWithoutFlyweight} bytes`)
    terminal.print(`  With Flyweights: ${sizeWithFlyweight} bytes`)
    terminal.print(`  Memory savings: ${sizeWithoutFlyweight - sizeWithFlyweight} bytes`)
}