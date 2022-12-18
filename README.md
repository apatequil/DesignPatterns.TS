# DesignPatterns.TS

## Overview

A repository containing a collection of design patterns written in Typescript.

## To Contribute

There are two ways to add to this repository: manual and automated. It's suggested you use the automated tool to generate the boilerplate of the pattern allowing you to focus on implementing the pattern and demonstration code rather than the scaffolding.

### Automatic Pattern Scaffolding

To automatically generate a new pattern, execute the following command:

<code>yarn patterns:create</code>

The script will prompt for a pattern name and automatically generate the necessary file structure along with adding an example script and yarn command.

Once the command finishes you will find a directory under src/patterns/ named after your pattern with the necessary code to execute a simple hello world type output. See manual creation for more information on what files are generated.

### Manual Pattern Scaffolding

To manually create a new pattern, you will need to create the following files and add a new yarn command and example script. You can use the flyweight design pattern as an example but generally speaking you need to generate the following:

1. Create pattern directory under <code>./src/patterns</code> named after your pattern. Note if you decide to have special characters in your pattern name it's on you to make that work. The guidance given is to use underscores instead of spaces and all lower-case characters.
2. Inside your pattern directory, create a file named run\_\<patternName>.ts which will contain the demonstration code for your pattern. This file will be referenced by the yarn script target to run the demonstration.
3. Add a new script under <code>./src/scripts</code> named <code>run\_\<patternName>.ts</code>. Import the demonstration code from the second step and execute it from this file.
4. Finally, add a new yarn command to package.json to execute your new script. The naming pattern for the design pattern demonstration scripts is <code>patterns:\<patternName></code>.
5. (OPTIONAL) Create a docs directory in your pattern's directory with a markdown file describing your pattern for documentation and learning reference material.

####To recap:

1. Create new directory in <code>./src/patterns/</code> named <code>\<patternName></code>.
2. Create new file in <code>./src/patterns/\<patternName></code> named <code>run\_\<patternName>.ts</code> which has code to demonstrate the pattern.
3. Create new file in <code>./src/scripts</code> named <code>run\_\<patternName>.ts</code> which calls the code from step 2.
4. Add new command to <code>./package.json</code> named <code>patterns:\<patternName></code> to execute the demonstration script from step 3.

###Consider:
If you are creating a piece of code which could be utilized by other patterns, consider placing it in the <code>./src/lib</code> directory with in a directory that makes sense.

## Patterns Implemented

To view all available patterns, you can use the <code>yarn patterns:ls</code> to view which ones have been implemented and how to execute them if a demonstration script is available.

- Flyweight [Documentation](./src/patterns/flyweight/docs/flyweight.md)

## Planned Patterns

- Abstract Factory
- Adapter
- Bridge
- Decorator
- Facade
- Flyweight
- Mediator
- Prototype
- Proxy
- Singleton
- Visitor
