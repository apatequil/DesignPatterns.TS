import { terminal } from '../../../lib/ui'
import { ActivityType, IActivity } from './activity'

export class ReadBook implements IActivity {
  activityName = ActivityType.LearnSubject
  doActivity(): void {
    terminal.info('Reading a book')
  }
}
