export enum ActivityType {
  PlayGame = 'Play Game',
  ReadBook = 'Read Book',
  LearnSubject = 'Learn Subject',
}

export interface IActivity {
  activityName: ActivityType
  doActivity(): void
}
