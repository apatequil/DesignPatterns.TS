import { terminal } from '../lib/ui/'
import fs from 'fs';

function runListDesignPatterns() {
    terminal.print(`==================================`)
    terminal.print(`||       Design Patterns        ||`)
    terminal.print(`==================================\n`)
    fs.readdirSync('./src/patterns/', { withFileTypes: true })
        .filter(item => item.isDirectory())
        .map(item => item.name)
        .forEach(item => {
            const runScriptExists = fs.existsSync(`./src/scripts/run_${item}.ts`)
            const directoryOutput = `  - ${item} ${runScriptExists ? ` (to run: 'yarn patterns:${item})'` : ``}`
            terminal.info(directoryOutput)
        })
    terminal.info('')
}

runListDesignPatterns()
