import { terminal } from '../../../lib/ui'
import { ActivityType, IActivity } from './activity'

export class LearnSubject implements IActivity {
  activityName = ActivityType.LearnSubject
  doActivity(): void {
    terminal.info('Learning a subject')
  }
}
