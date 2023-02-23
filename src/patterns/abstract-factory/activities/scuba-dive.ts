import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'
export class ScubaDive implements IActivity {
  activity = ActivityType.ScubaDive

  doActivity(): void {
    terminal.info('SCUBA diving')
  }
}
