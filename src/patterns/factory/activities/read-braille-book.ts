import { IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class ReadBrailleBook implements IActivity {
  doActivity(): void {
    terminal.info('Reading with touch')
  }
}
