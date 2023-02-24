
import { terminal } from '../../../lib/ui'
import { BaseActivity } from './base-activity'
export class DriveCar extends BaseActivity {
  static activity = 'Drive Car'

  doActivity(): void {
    terminal.info('Driving car')
  }
}
