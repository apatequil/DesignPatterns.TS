import { terminal } from "../../../lib/ui";
import { ActivityType } from "../activities";
import { AgeRequirement, LicenseTypeRequirement, LicenseType } from "../activities/activity-requirements";
import { BaseActivityFactory } from "./base-activity-factory";
import { ScubaDive } from "../activities/scuba-dive";

export class ScubaDiveFactory extends BaseActivityFactory<ScubaDive> {

    requirements = [
        new AgeRequirement(12),
        new LicenseTypeRequirement(LicenseType.Scuba)
    ]

    handledActivities: string[] = [
        ActivityType.ScubaDive
    ]

    createActivity(): ScubaDive | null {
        if (!this.checkRequirements()) {
            terminal.info('User did not meet requirements for the scuba diving activity')
            terminal.info('Requirements:')
            this.printRequirements()

            return null
        }

        return new ScubaDive()
    }
}