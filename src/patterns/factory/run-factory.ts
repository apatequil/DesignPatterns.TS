import { getEnumKeyByValue } from '../../lib/enum'
import { terminal } from '../../lib/ui'
import { ActivityType } from './activities/activity'
import { ActivityFactory } from './activity-factory'
export function runExample() {
  const factory = new ActivityFactory()
  terminal.info('Running factory pattern')

  // Prompt user on activity
  const chosenActivity = terminal.promptWithChoiceSync<string>(
    'Choose activity',
    Object.values(ActivityType),
  )

  if (!chosenActivity) {
    terminal.info('No activity selected')
    return
  }

  // Use factory method to get activity
  const createdActivity = factory.createActivity(chosenActivity)
  // Execute activity
  createdActivity?.doActivity()
}
