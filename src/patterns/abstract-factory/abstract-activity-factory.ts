import { ActivityType, IActivity } from './activities'
import { BaseActivityFactory } from './factories/base-activity-factory'

export class AbstractActivityFactory {
  static registeredActivities: BaseActivityFactory<IActivity>[] = []

  static registerActivity(activity: BaseActivityFactory<IActivity>) {
    this.registeredActivities.push(activity)
  }

  static registerActivities(activities: BaseActivityFactory<IActivity>[]) {
    this.registeredActivities.push(...activities)
  }

  static createActivity(activity: string): IActivity | null {

    const factoryHandler = this.registeredActivities.find(x => x.canHandleActivity(activity))
    return factoryHandler?.createActivity() ?? null
  }

  static listActivities(): string[] {
    return Object.values(ActivityType)
  }
}
