import { terminal } from "../../../lib/ui";
import { ActivityType } from "../activities";
import { AgeRequirement, LicenseTypeRequirement, LicenseTypes } from "../activities/activity-requirements";
import { DriveCar } from "../activities";
import { BaseActivityFactory } from "./base-activity-factory";

export class DriveCarFactory extends BaseActivityFactory<DriveCar> {

    requirements = [
        new AgeRequirement(16),
        new LicenseTypeRequirement(LicenseTypes.Passenger)
    ]

    handledActivities: string[] = [
        ActivityType.DriveCar
    ]

    createActivity(): DriveCar | null {
        if (!this.checkRequirements()) {
            terminal.info('User did not meet requirements for the drive car activity')
            terminal.info('Requirements:')
            this.printRequirements()

            return null
        }

        return new DriveCar()
    }
}