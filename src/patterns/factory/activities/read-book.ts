import { IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class ReadBook implements IActivity {
  doActivity(): void {
    terminal.info('Reading a book')
  }
}
