import { IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class PlayGame implements IActivity {
  doActivity(): void {
    terminal.info('Playing a game')
  }
}
