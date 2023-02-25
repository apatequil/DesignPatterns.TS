import { LearnSubject, PlayGame, ReadBook/*, ScubaDive*/ } from './activities'
import { ActivityType, IActivity } from './activities'

export class ActivityFactory {
  static createActivity(activity: string): IActivity | null {
    switch (activity) {
      case ActivityType.ReadBook:
        return new ReadBook()
      case ActivityType.PlayGame:
        return new PlayGame()
      case ActivityType.LearnSubject:
        return new LearnSubject()
      // case ActivityType.ScubaDive:
      //   return new ScubaDive()
      default:
        return null
    }
  }

  static listActivities(): string[] {
    return Object.values(ActivityType)
  }
}
