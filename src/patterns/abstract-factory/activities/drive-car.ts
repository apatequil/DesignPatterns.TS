import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'
export class DriveCar implements IActivity {
  activity = ActivityType.DriveCar

  doActivity(): void {
    terminal.info('Driving car')
  }
}
