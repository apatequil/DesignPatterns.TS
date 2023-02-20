import { ActivityType } from "."

export interface IActivity {
  activity: ActivityType
  doActivity(): void
}
