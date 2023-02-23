import { terminal } from '../../lib/ui'
import { AbstractActivityFactory } from './abstract-activity-factory'

export function runExample() {
	terminal.info('Running abstract factory pattern')

	// Prompt user on which activity they want to do
	const chosenActivity = terminal.promptWithChoiceSync<string>(
		'Choose activity ',
		AbstractActivityFactory.listActivities(),
	)

	// Execute activity if it exists
	AbstractActivityFactory.createActivity(chosenActivity)?.doActivity()
}
