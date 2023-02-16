import { LearnSubject, PlayGame, ReadBook } from './activities'
import { ActivityType, IActivity } from './activities/activity'

export class ActivityFactory {
  createActivity(activity: string): IActivity {
    switch (activity) {
      case ActivityType.ReadBook:
        return new ReadBook()
      case ActivityType.PlayGame:
        return new PlayGame()
      case ActivityType.LearnSubject:
        return new LearnSubject()
      default:
        throw new Error('bloop')
    }
  }
}
