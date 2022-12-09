// Example program using Flyweight design pattern
//import { ProductManager } from './1_single_responsibility/naive'
import chalk from 'chalk'
const readline = require('readline-sync')

function buildIndent(count: number) {
  return '\t'.repeat(count)
}
function info(message: string, indent: number = 0) {
  console.log(chalk.cyan(`${buildIndent(indent)}${message}`))
}

async function runFlyweight() {
  info(`==================================`)
  info(`||   Flyweight Design Pattern   ||`)
  info(`==================================`)

  //const manager = new ProductManager()

  info(`Beginning Inventory:`)
  const message = readline.question(`Enter a message: `)
  info(`Message Entered: ${message}`)
}

runFlyweight()
