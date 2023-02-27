import { IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class ReadDigitalBook implements IActivity {
  doActivity(): void {
    terminal.info('Reading Digital Book')
  }
}
