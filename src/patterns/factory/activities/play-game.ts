import { IActivity } from './activity'

export class PlayGame implements IActivity {
  activityName: string = 'Play game'
  doActivity(): void {
    console.log('Playing a game')
  }
}
