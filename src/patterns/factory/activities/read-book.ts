import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class ReadBook implements IActivity {
  activity = ActivityType.LearnSubject
  doActivity(): void {
    terminal.info('Reading a book')
  }
}
