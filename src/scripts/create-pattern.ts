const packageContents = require('../../package.json')
import { terminal } from '../lib/ui'
var fs = require('fs')

const packageLocation = './package.json'

// Get the name of the pattern from the user
let patternName = terminal.prompt('Enter a pattern name: ').toLowerCase().replace(' ', '_')

// Create pattern root directory
let patternRoot = `./src/patterns/${patternName}`
if (!fs.existsSync(patternRoot)) {
  fs.mkdirSync(patternRoot)
}

// Create pattern docs directory
if (!fs.existsSync(`${patternRoot}/docs`)) {
  fs.mkdirSync(`${patternRoot}/docs`)
}

// Create doc file
if (!fs.existsSync(`${patternRoot}/docs/${patternName}.md`)) {
  fs.writeFileSync(`${patternRoot}/docs/${patternName}.md`, `#${patternName}`)
}

// Build demonstration script
let demonstrationScriptPath = `./src/patterns/${patternName}/run-${patternName}.ts`
let demonstrationScriptCode = "import { terminal } from '../../lib/ui'\n"
demonstrationScriptCode += 'export function runExample() {\n'
demonstrationScriptCode += `\tterminal.info('Running ${patternName} pattern')\n`
demonstrationScriptCode += '}'

fs.writeFileSync(demonstrationScriptPath, demonstrationScriptCode)

// Build index
fs.writeFileSync(
  `./src/patterns/${patternName}/index.ts`,
  `export { runExample } from './run-${patternName}'`,
)

// Build pattern script which executes the demonstration
const runDemonstrationScriptPath = `./src/scripts/run-${patternName}.ts`
let runDemonstrationScriptCode = `import { runExample } from '../patterns/${patternName}/run-${patternName}'\n`
runDemonstrationScriptCode += 'runExample()\n'
fs.writeFileSync(runDemonstrationScriptPath, runDemonstrationScriptCode)

// Add new command to package.json which runs the pattern script created above
let yarnCommand = `patterns:${patternName}`
packageContents.scripts[yarnCommand] = `ts-node ${runDemonstrationScriptPath}`
console.log('package', packageContents)
fs.writeFileSync(packageLocation, JSON.stringify(packageContents, null, 2), { flag: 'w' })
