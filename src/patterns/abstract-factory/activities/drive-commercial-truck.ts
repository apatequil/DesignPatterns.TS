import { ActivityType, IActivity } from '.'
import { terminal } from '../../../lib/ui'
export class DriveCommercialTruck implements IActivity {
  activity = ActivityType.DriveCommercialTruck

  doActivity(): void {
    terminal.info('Driving commercial truck')
  }
}
