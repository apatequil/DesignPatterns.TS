import { terminal } from '../../lib/ui'
import { ActivityFactory } from './activity-factory'
export function runExample() {
  terminal.info('Running factory pattern')

  // Prompt user on activity
  const chosenActivity = terminal.promptWithChoiceSync<string>(
    'Choose activity',
    ActivityFactory.listActivities(),
  )

  // // Exectute activity if it exists
  ActivityFactory.createActivity(chosenActivity)?.doActivity()
}
