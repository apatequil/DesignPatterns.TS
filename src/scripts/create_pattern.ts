const packageContents = require('../../package.json')
import { terminal } from '../lib/ui';
var fs = require('fs');


const packageLocation = './package.json'

// get name from user
let patternName = terminal.prompt('Enter a pattern name: ').toLowerCase().replace(' ', '_')
//create src/patterns/patternName
//create src/patterns/patternName/docs
//create src/patterns/patternName/docs/patternName.md

// Create pattern root directory
let patternRoot = `./src/patterns/${patternName}`
if (!fs.existsSync(patternRoot)) {
    fs.mkdirSync(patternRoot);
}

// Create pattern docs directory
if (!fs.existsSync(`${patternRoot}/docs`)) {
    fs.mkdirSync(`${patternRoot}/docs`);
}

// Create doc file
if (!fs.existsSync(`${patternRoot}/docs/${patternName}.md`)) {
    fs.writeFileSync(`${patternRoot}/docs/${patternName}.md`, `#${patternName}`);
}

// Build demonstration script
let demonstrationScriptPath = `./src/patterns/${patternName}/run_${patternName}.ts`
let demonstrationScriptCode = "import { terminal } from '../../lib/ui'\n"
demonstrationScriptCode += "export function runExample() {\n"
demonstrationScriptCode += `\tterminal.info('Running ${patternName} pattern')\n`
demonstrationScriptCode += "}"

fs.writeFileSync(demonstrationScriptPath, demonstrationScriptCode);

// Build index
fs.writeFileSync(`./src/patterns/${patternName}/index.ts`, `export { runExample } from './run_${patternName}'`)

// Build pattern script which executes the demonstration
const runDemonstrationScriptPath = `./src/scripts/run_${patternName}.ts`
let runDemonstrationScriptCode = `import { runExample } from '../patterns/${patternName}/run_${patternName}'\n`
runDemonstrationScriptCode += "runExample()\n"
fs.writeFileSync(runDemonstrationScriptPath, runDemonstrationScriptCode);

// Add new command to package.json
let yarnCommand = `patterns:${patternName}`
packageContents.scripts[yarnCommand] = `ts-node ${runDemonstrationScriptPath}`
console.log('package', packageContents)
fs.writeFileSync(packageLocation, JSON.stringify(packageContents, null, 2), { flag: 'w' });