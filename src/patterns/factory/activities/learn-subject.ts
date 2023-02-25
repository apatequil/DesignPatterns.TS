import { IActivity } from '.'
import { terminal } from '../../../lib/ui'

export class LearnSubject implements IActivity {
  doActivity(): void {
    terminal.info('Learning a subject')
  }
}
