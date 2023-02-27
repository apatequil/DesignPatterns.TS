import { ReadDigitalBook, ReadBrailleBook, ReadBook /*, ScubaDive*/ } from './activities'
import { ActivityType, IActivity } from './activities'

export class ActivityFactory {
  static createActivity(activity: string): IActivity | null {
    switch (activity) {
      case ActivityType.ReadBook:
        return new ReadBook()
      case ActivityType.ReadDigitalBook:
        return new ReadDigitalBook()
      case ActivityType.ReadBrailleBook:
        return new ReadBrailleBook()
      default:
        return null
    }
  }

  static listActivities(): string[] {
    return Object.values(ActivityType)
  }
}
