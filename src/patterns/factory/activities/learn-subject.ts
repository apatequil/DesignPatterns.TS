import { IActivity } from './activity'

export class LearnSubject implements IActivity {
  activityName: string = 'Learn Subject'
  doActivity(): void {
    console.log('Learning a subject')
  }
}
