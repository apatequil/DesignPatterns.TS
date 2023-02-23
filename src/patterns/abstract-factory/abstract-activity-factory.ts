import { IActivity } from './activities'
import { BaseActivityFactory } from './factories/base-activity-factory'

export class AbstractActivityFactory {
  static registeredActivities: BaseActivityFactory<IActivity>[] = []

  // Registration functions. Each factory can be registered to this abstract
  // factory and the abstract factory will seamlessly utilze the factory
  // based on factory eligibility decided by the factory itself.
  static registerFactory(activity: BaseActivityFactory<IActivity>) {
    this.registeredActivities.push(activity)
  }

  static registerFactories(activities: BaseActivityFactory<IActivity>[]) {
    this.registeredActivities.push(...activities)
  }

  // Main entry into the factory. This takes in the activity chosen, identifies
  // which handler to use (without knowing any details since the individual factories
  // make this determination), and then uses the factory to create an instance of the
  // activity and execute it
  static createActivity(activity: string): IActivity | null {

    const factoryHandler = this.registeredActivities.find(x => x.canHandleActivity(activity))
    return factoryHandler?.createActivity() ?? null
  }

  // This isn't necessary but makes the UI handling easier by providing a list of activity types
  // which can be handled by any of the registered factories
  static listActivities(): string[] {

    const availableActivities: string[] = []
    this.registeredActivities.map(x => availableActivities.push(...x.handledActivities))

    return availableActivities
  }
}
