import { LearnSubject, PlayGame, ReadBook } from './activities'
import { IActivity } from './activities/activity'

export class ActivityFactory {
  createActivity(activityName: string): IActivity {
    switch (activityName.toLowerCase()) {
      case 'read book':
        return new ReadBook()
      case 'play game':
        return new PlayGame()
      case 'learn subject':
        return new LearnSubject()
      default:
        throw new Error(`Unknown activity type: ${activityName}`)
    }
  }
}
