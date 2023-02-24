import { terminal } from '../../../lib/ui'
import { BaseActivity } from './base-activity'

export class ScubaDive extends BaseActivity {
  static activity = 'Scuba Dive'

  doActivity(): void {
    terminal.info('SCUBA diving')
  }
}
