import { terminal } from '../../../lib/ui'
import { BaseActivity } from './base-activity'

export class DriveCommercialTruck implements BaseActivity {
  static activity = 'Drive Commercial Truck'

  doActivity(): void {
    terminal.info('Driving commercial truck')
  }
}
