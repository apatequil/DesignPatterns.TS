import { terminal } from '../../lib/ui'
import { AbstractActivityFactory } from './abstract-activity-factory'
import { DriveCarFactory } from './factories/drive-car-factory'
import { DriveCommercialTruckFactory } from './factories/drive-commercial-truck-factory'
import { ScubaDiveFactory } from './factories/scuba-dive-factory'

export function runExample() {
	terminal.info('Running abstract factory pattern')

	// Register factories with our abstract factory. This could be done dynamically but for demonstration purposes we'll
	// just manually register them.
	AbstractActivityFactory.registerActivities([
		new DriveCarFactory(),
		new DriveCommercialTruckFactory(),
		new ScubaDiveFactory()
	])

	// Prompt user on activity
	const chosenActivity = terminal.promptWithChoiceSync<string>(
		'Choose activity ',
		AbstractActivityFactory.listActivities(),
	)

	// Exectute activity if it exists
	AbstractActivityFactory.createActivity(chosenActivity)?.doActivity()
}
