import chalk, { Chalk as FontColor } from "chalk";
import { buildIndent } from "../formatting/strings";
import { question, BasicOptions } from "readline-sync";

export function info(message: string, indent: number = 0): void {
  console.log(chalk.white(`${buildIndent(indent)}${message}`));
}

export function debug(message: string, indent: number = 0): void {
  console.log(chalk.cyan(`${buildIndent(indent)}${message}`));
}

export function error(message: string, indent: number = 0): void {
  console.log(chalk.redBright(`${buildIndent(indent)}${message}`));
}

export function prompt(message: string, options?: BasicOptions): string {
  return question(message, options);
}

export function print(
  message: string,
  fontColor?: FontColor
) {
  // pretend we're using the font, color, etc..
  if (fontColor) {
    console.log(fontColor(message))
  } else { info(message); }
}