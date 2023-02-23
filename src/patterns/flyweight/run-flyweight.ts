// Example program using Flyweight design pattern
import { terminal } from '../../lib/ui'
import { Document } from '.'

const includeSizeBreakdown = false
export function runExample() {
    terminal.print(`==================================`)
    terminal.print(`||   Flyweight Design Pattern   ||`)
    terminal.print(`==================================`)

    // Prompt user for a message which we'll load into our document
    const message = terminal.prompt<string>('Enter a message: ').toLowerCase()

    const document = new Document(message)
    terminal.print(`Message to process:`)
    document.printContents()

    const { sizeWithoutFlyweight, sizeWithFlyweight } =
        document.calculateMemoryStatistics(includeSizeBreakdown)

    const memorySavedBytes = sizeWithoutFlyweight - sizeWithFlyweight
    const memorySavedPercent = ((1 - (sizeWithFlyweight / sizeWithoutFlyweight)) * 100).toFixed(2)

    terminal.print(`Memory Profile:`)
    terminal.print(`  Without Flyweights: ${sizeWithoutFlyweight} bytes`)
    terminal.print(`     With Flyweights: ${sizeWithFlyweight} bytes`)
    terminal.print(`      Memory savings: ${memorySavedPercent}% (${memorySavedBytes} bytes)`)
}