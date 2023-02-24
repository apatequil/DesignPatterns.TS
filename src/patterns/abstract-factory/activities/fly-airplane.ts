import { IActivity } from '.'
import { terminal } from '../../../lib/ui'
import { BaseActivity } from './base-activity'

export class FlyAirplane extends BaseActivity {
  static activity = 'Fly Airplane'

  doActivity(): void {
    terminal.info('Flying airplane')
  }
}
