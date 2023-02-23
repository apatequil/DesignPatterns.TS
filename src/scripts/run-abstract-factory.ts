import { AbstractActivityFactory } from '../patterns/abstract-factory/abstract-activity-factory'
import { DriveCarFactory, DriveCommercialTruckFactory } from '../patterns/abstract-factory/factories'
import { ScubaDiveFactory } from '../patterns/abstract-factory/factories/scuba-dive-factory'
import { runExample } from '../patterns/abstract-factory/run-abstract-factory'

// Register factories with our abstract factory. This could be done dynamically but for demonstration purposes we'll
// just manually register them. Traditionally, this kind of thing would be handled during application startup and
// behaves similar to plugin systems where you can create your own factories and register them. They are then
// available for use without having to change the calling code, the main (abstract) factory, or anything else. Simply
// create the activity, create the activity's factory, and register it. 
AbstractActivityFactory.registerFactories([
    new DriveCarFactory(),
    new DriveCommercialTruckFactory(),
    new ScubaDiveFactory()
])

runExample()
