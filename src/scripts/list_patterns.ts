import { terminal } from '../lib/ui/'
import fs from 'fs';

function runListDesignPatterns() {
    terminal.print(`==================================`)
    terminal.print(`||       Design Patterns        ||`)
    terminal.print(`==================================\n`)

    terminal.info('Patterns:')
    fs.readdirSync('./src/patterns/', { withFileTypes: true })
        .filter(item => item.isDirectory())
        .map(item => item.name)
        .forEach(item => {
            terminal.info(`  |- ${item} (to run: 'yarn patterns:${item})'`)
        })
    terminal.info('')
}

runListDesignPatterns()
