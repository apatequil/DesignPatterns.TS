import { IActivity } from './activity'

export class ReadBook implements IActivity {
  activityName: string = 'Read Book'
  doActivity(): void {
    console.log('Reading a book')
  }
}
