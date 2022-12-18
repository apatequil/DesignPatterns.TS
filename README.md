# DesignPatterns.TS

## To Contribute

Each pattern in the repository should be contained in ./src/patterns and contain the code necessary to demonstrate the design pattern in question. To ensure each pattern can be executed in a consistent manner, your pattern should have a corresponding file in ./scripts with the naming convention "run\_\<pattern>.ts". A new yarn command should also be added with the command format patterns:\<pattern> to ./package.json's commands section.

To recap:

1. Create new directory in <code>./src/patterns/</code> named <code>\<pattern></code>
2. Create new file in <code>./scripts</code> named <code>run\_\<pattern></code> which has code to demonstrate the pattern
3. Add new command to <code>./package.json</code> named <code>patterns:\<pattern></code>

If you are creating a piece of code which could be utilized by other patterns, consider placing it in the <code>./src/lib</code> directory with in a directory that makes sense.

## Patterns Implemented

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
