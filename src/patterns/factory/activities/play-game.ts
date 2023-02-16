import { terminal } from '../../../lib/ui'
import { ActivityType, IActivity } from './activity'

export class PlayGame implements IActivity {
  activityName = ActivityType.PlayGame
  doActivity(): void {
    terminal.info('Playing a game')
  }
}
