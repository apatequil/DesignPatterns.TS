import { terminal } from '../../lib/ui'
import { ActivityFactory } from './activity-factory'
export function runExample() {
  const factory = new ActivityFactory()
  terminal.info('Running factory pattern')

  // Prompt user on activity
  const chosenActivity = terminal.prompt('Enter an activity: ')
  // User factory to get activity
  const createdActivity = factory.createActivity(chosenActivity)
  // execute activity
  createdActivity.doActivity()
}
