import { LearnSubject, PlayGame, ReadBook } from './activities'
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
      default:
        return null
    }
  }

  static listActivities(): string[] {
    return Object.values(ActivityType)
  }
}
