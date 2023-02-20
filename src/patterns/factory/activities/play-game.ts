import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class PlayGame implements IActivity {
  activity = ActivityType.PlayGame
  doActivity(): void {
    terminal.info('Playing a game')
  }
}
