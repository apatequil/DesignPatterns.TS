import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class LearnSubject implements IActivity {
  activity = ActivityType.LearnSubject
  doActivity(): void {
    terminal.info('Learning a subject')
  }
}
