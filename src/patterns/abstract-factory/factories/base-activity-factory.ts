import { IRequirement } from '../activities/activity-requirements'
import { IActivity } from '../activities'
import { terminal } from '../../../lib/ui';

export abstract class BaseActivityFactory<T extends IActivity> {
  abstract requirements: IRequirement[]
  abstract handledActivities: string[]
  abstract createActivity(): T | null

  checkRequirements = () => this.requirements.every(requirement => requirement.checkRequirement())
  printRequirements = () => this.requirements.forEach(x => terminal.info(` - ${x.description}`))
  canHandleActivity = (activityName: string) => this.handledActivities.includes(activityName)
}
