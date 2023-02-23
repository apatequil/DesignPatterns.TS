import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'
export class FlyAirplane implements IActivity {
  activity = ActivityType.FlyAirplane

  doActivity(): void {
    terminal.info('Flying airplane')
  }
}
